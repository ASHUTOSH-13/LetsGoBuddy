from decimal import Decimal
from typing import List, Optional

from pydantic import BaseModel


class TourItineraryDay(BaseModel):
    day_number: int
    title: str
    description: Optional[str] = None


class TourBase(BaseModel):
    id: int
    slug: str
    title: str
    destination_slug: str
    destination_name: str
    category_slug: str
    category_name: str
    short_description: Optional[str] = None
    duration_nights: int
    duration_days: int
    starting_city: Optional[str] = None
    base_price_per_person: Decimal
    active_season_name: str
    hero_image_url: Optional[str] = None
    is_featured: bool


class TourListItem(TourBase):
    pass


class TourDetail(TourBase):
    gallery_images: List[str]
    inclusions: List[str]
    exclusions: List[str]
    itinerary: List[TourItineraryDay]
