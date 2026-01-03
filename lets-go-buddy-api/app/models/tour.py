from sqlalchemy import (
    BigInteger,
    Boolean,
    Column,
    Date,
    ForeignKey,
    Numeric,
    Text,
    Integer,
    TIMESTAMP,
    func,
)
from sqlalchemy.orm import relationship

from app.core.db import Base


class Destination(Base):
    __tablename__ = "destinations"

    id = Column(BigInteger, primary_key=True, index=True)
    name = Column(Text, nullable=False, unique=True)
    slug = Column(Text, nullable=False, unique=True)
    type = Column(Text, nullable=False)
    created_at = Column(TIMESTAMP(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(
        TIMESTAMP(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )

    tours = relationship("Tour", back_populates="destination")


class Category(Base):
    __tablename__ = "categories"

    id = Column(BigInteger, primary_key=True, index=True)
    name = Column(Text, nullable=False, unique=True)
    slug = Column(Text, nullable=False, unique=True)
    created_at = Column(TIMESTAMP(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(
        TIMESTAMP(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )

    tours = relationship("Tour", back_populates="category")


class Tour(Base):
    __tablename__ = "tours"

    id = Column(BigInteger, primary_key=True, index=True)
    title = Column(Text, nullable=False)
    slug = Column(Text, nullable=False, unique=True, index=True)
    short_description = Column(Text)
    destination_id = Column(BigInteger, ForeignKey("destinations.id"), nullable=False)
    category_id = Column(BigInteger, ForeignKey("categories.id"), nullable=False)
    duration_nights = Column(Integer, nullable=False)
    duration_days = Column(Integer, nullable=False)
    starting_city = Column(Text)
    base_price_per_person = Column(Numeric(10, 2), nullable=False, default=0)
    is_active = Column(Boolean, nullable=False, default=True)
    is_featured = Column(Boolean, nullable=False, default=False)
    target_age_min = Column(Integer, nullable=False, default=18)
    target_age_max = Column(Integer, nullable=False, default=35)
    created_at = Column(TIMESTAMP(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(
        TIMESTAMP(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )

    destination = relationship("Destination", back_populates="tours")
    category = relationship("Category", back_populates="tours")
    seasonal_prices = relationship(
        "TourSeasonalPrice", back_populates="tour", cascade="all, delete-orphan"
    )
    itineraries = relationship(
        "TourItinerary", back_populates="tour", order_by="TourItinerary.day_number",
        cascade="all, delete-orphan",
    )
    inclusions = relationship(
        "TourInclusion", back_populates="tour", cascade="all, delete-orphan"
    )
    exclusions = relationship(
        "TourExclusion", back_populates="tour", cascade="all, delete-orphan"
    )
    gallery_images = relationship(
        "TourGalleryImage", back_populates="tour", cascade="all, delete-orphan"
    )


class TourSeasonalPrice(Base):
    __tablename__ = "tour_seasonal_prices"

    id = Column(BigInteger, primary_key=True, index=True)
    tour_id = Column(BigInteger, ForeignKey("tours.id", ondelete="CASCADE"), nullable=False)
    season_name = Column(Text, nullable=False)
    price_per_person = Column(Numeric(10, 2), nullable=False)
    is_active = Column(Boolean, nullable=False, default=True)
    effective_from = Column(Date)
    effective_to = Column(Date)
    created_at = Column(TIMESTAMP(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(
        TIMESTAMP(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )

    tour = relationship("Tour", back_populates="seasonal_prices")


class TourItinerary(Base):
    __tablename__ = "tour_itineraries"

    id = Column(BigInteger, primary_key=True, index=True)
    tour_id = Column(BigInteger, ForeignKey("tours.id", ondelete="CASCADE"), nullable=False)
    day_number = Column(Integer, nullable=False)
    title = Column(Text, nullable=False)
    description = Column(Text)
    created_at = Column(TIMESTAMP(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(
        TIMESTAMP(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )

    tour = relationship("Tour", back_populates="itineraries")


class TourInclusion(Base):
    __tablename__ = "tour_inclusions"

    id = Column(BigInteger, primary_key=True, index=True)
    tour_id = Column(BigInteger, ForeignKey("tours.id", ondelete="CASCADE"), nullable=False)
    text = Column(Text, nullable=False)

    tour = relationship("Tour", back_populates="inclusions")


class TourExclusion(Base):
    __tablename__ = "tour_exclusions"

    id = Column(BigInteger, primary_key=True, index=True)
    tour_id = Column(BigInteger, ForeignKey("tours.id", ondelete="CASCADE"), nullable=False)
    text = Column(Text, nullable=False)

    tour = relationship("Tour", back_populates="exclusions")


class TourGalleryImage(Base):
    __tablename__ = "tour_gallery_images"

    id = Column(BigInteger, primary_key=True, index=True)
    tour_id = Column(BigInteger, ForeignKey("tours.id", ondelete="CASCADE"), nullable=False)
    image_url = Column(Text, nullable=False)
    is_hero = Column(Boolean, nullable=False, default=False)

    tour = relationship("Tour", back_populates="gallery_images")


class Enquiry(Base):
    __tablename__ = "enquiries"

    id = Column(BigInteger, primary_key=True, index=True)
    tour_id = Column(BigInteger, ForeignKey("tours.id", ondelete="SET NULL"))
    full_name = Column(Text, nullable=False)
    email = Column(Text)
    phone = Column(Text, nullable=False)
    number_of_travelers = Column(Integer, nullable=False)
    preferred_month = Column(Text)
    message = Column(Text)
    status = Column(Text, nullable=False, default="new")
    created_at = Column(TIMESTAMP(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(
        TIMESTAMP(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )

    tour = relationship("Tour")
