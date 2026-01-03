export type DestinationSlug =
  | 'himachal-pradesh'
  | 'uttarakhand'
  | 'rajasthan'
  | 'pilgrimage';

// Backend itinerary shape (snake_case)
export interface BackendTourItineraryDay {
  day_number: number;
  title: string;
  description?: string | null;
}

// Frontend itinerary shape (camelCase)  
export interface FrontendTourItineraryDay {
  dayNumber: number;
  title: string;
  description: string;
}

// Backend list shape (snake_case, partial)
export interface TourListItem {
  id: number;
  slug: string;
  title: string;
  destination_slug: string;
  destination_name: string;
  category_slug: string;
  category_name: string;
  short_description?: string | null;
  duration_nights: number;
  duration_days: number;
  starting_city?: string | null;
  base_price_per_person: string;  // Decimal as string
  active_season_name: string;
  hero_image_url?: string | null;
  is_featured: boolean;
}

// Backend detail shape (extends list + extra fields)
export interface TourDetail extends TourListItem {
  gallery_images: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: BackendTourItineraryDay[];
}

// Frontend full shape (camelCase, complete)
export interface Tour {
  id: number;
  slug: string;
  title: string;
  destinationSlug: DestinationSlug;
  destinationName: string;
  categorySlug: string;
  categoryName: string;
  shortDescription: string;
  durationNights: number;
  durationDays: number;
  startingCity: string;
  basePricePerPerson: number;
  activeSeasonName: string;
  heroImageUrl: string;
  galleryImages: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: FrontendTourItineraryDay[];
  isFeatured: boolean;
}

export interface EnquiryCreateFormData {
  tour_slug: string;
  full_name: string;
  email?: string;
  phone: string;
  number_of_travelers: number;
  preferred_month?: string;
  message?: string;
}
