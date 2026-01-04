from typing import List, Optional
import re

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session, joinedload, selectinload

from app.core.db import SessionLocal
from app.models.tour import (
    Tour,
    Destination,
    Category,
    TourSeasonalPrice,
    TourGalleryImage,
    TourInclusion,
    TourExclusion,
    TourItinerary,
)
from app.schemas.tour import TourListItem, TourDetail, TourItineraryDay

router = APIRouter(prefix="/tours", tags=["tours"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def clean_image_url(url: str) -> str:
    """Clean Unsplash URLs: strip markdown/params, fix photos/ → photo-"""
    if not url:
        return ""
    
    # Strip markdown [text](url)
    clean = re.sub(r'\[.*?\]\((https?://.*)\)', r'\1', url)
    
    # Fix unsplash.com/photos/ID → images.unsplash.com/photo-ID
    clean = re.sub(r'unsplash\.com/photos/([a-zA-Z0-9_-]+)', r'images.unsplash.com/photo-\1', clean)
    
    # Strip query params
    clean = clean.split('?')[0]
    
    return clean

@router.get("", response_model=List[TourListItem])
def list_tours(
    destination: Optional[str] = Query(default=None),
    db: Session = Depends(get_db),
):
    query = (
        db.query(Tour)
        .options(
            joinedload(Tour.destination),
            joinedload(Tour.category),
            selectinload(Tour.gallery_images),
            selectinload(Tour.seasonal_prices),
        )
        .filter(Tour.is_active.is_(True))
    )

    if destination:
        query = query.join(Destination).filter(Destination.slug == destination)

    tours = query.all()

    result: List[TourListItem] = []
    for tour in tours:
        active_price = next(
            (sp for sp in tour.seasonal_prices if sp.is_active),
            None,
        )
        raw_hero = next(
            (img.image_url for img in tour.gallery_images if img.is_hero),
            (tour.gallery_images[0].image_url if tour.gallery_images else None),
        )
        hero_image_url = clean_image_url(raw_hero)  # ✅ Clean here

        item = TourListItem(
            id=tour.id,
            slug=tour.slug,
            title=tour.title,
            destination_slug=tour.destination.slug,
            destination_name=tour.destination.name,
            category_slug=tour.category.slug,
            category_name=tour.category.name,
            short_description=tour.short_description,
            duration_nights=tour.duration_nights,
            duration_days=tour.duration_days,
            starting_city=tour.starting_city,
            base_price_per_person=active_price.price_per_person
            if active_price
            else tour.base_price_per_person,
            active_season_name=active_price.season_name if active_price else "Standard",
            hero_image_url=hero_image_url,  # ✅ Clean URL
            is_featured=tour.is_featured,
        )
        result.append(item)

    return result

@router.get("/{slug}", response_model=TourDetail)
def get_tour_detail(slug: str, db: Session = Depends(get_db)):
    tour: Optional[Tour] = (
        db.query(Tour)
        .options(
            joinedload(Tour.destination),
            joinedload(Tour.category),
            selectinload(Tour.gallery_images),
            selectinload(Tour.seasonal_prices),
            selectinload(Tour.inclusions),
            selectinload(Tour.exclusions),
            selectinload(Tour.itineraries),
        )
        .filter(Tour.slug == slug, Tour.is_active.is_(True))
        .first()
    )

    if not tour:
        raise HTTPException(status_code=404, detail="Tour not found")

    active_price = next(
        (sp for sp in tour.seasonal_prices if sp.is_active),
        None,
    )

    raw_hero = next(
        (img.image_url for img in tour.gallery_images if img.is_hero),
        (tour.gallery_images[0].image_url if tour.gallery_images else None),
    )
    hero_image_url = clean_image_url(raw_hero)  # ✅ Clean here

    itinerary_days = [
        TourItineraryDay(
            day_number=day.day_number,
            title=day.title,
            description=day.description,
        )
        for day in sorted(tour.itineraries, key=lambda d: d.day_number)
    ]

    detail = TourDetail(
        id=tour.id,
        slug=tour.slug,
        title=tour.title,
        destination_slug=tour.destination.slug,
        destination_name=tour.destination.name,
        category_slug=tour.category.slug,
        category_name=tour.category.name,
        short_description=tour.short_description,
        duration_nights=tour.duration_nights,
        duration_days=tour.duration_days,
        starting_city=tour.starting_city,
        base_price_per_person=active_price.price_per_person
        if active_price
        else tour.base_price_per_person,
        active_season_name=active_price.season_name if active_price else "Standard",
        hero_image_url=hero_image_url,  # ✅ Clean URL
        is_featured=tour.is_featured,
        gallery_images=[clean_image_url(img.image_url) for img in tour.gallery_images],  # ✅ Clean gallery too
        inclusions=[inc.text for inc in tour.inclusions],
        exclusions=[exc.text for exc in tour.exclusions],
        itinerary=itinerary_days,
    )

    return detail
