import { Suspense } from 'react';
import { getTours } from '@/lib/api-client';
import { TourFilters } from '@/components/tours/TourFilters';
import { TourCard } from '@/components/tours/TourCard';
import { TourListItem, Tour } from '@/lib/types';

// Clean markdown URLs from backend (fixes [url](url) → url)
function cleanUrl(url: string | null | undefined): string {
  if (!url) return '';
  return url.replace(/\[.*?\]\((.*?)\)/, '$1').replace(/^\[.*?\]/, '').trim();
}

interface Props {
  searchParams: Promise<{ destination?: string }>;
}

export default async function ToursPage({ searchParams }: Props) {
  const params = await searchParams;
  const destination = params.destination || undefined;
  
  const toursData: TourListItem[] = await getTours(destination);

  // Convert backend TourListItem[] to frontend Tour[] with clean URLs
  const tours: Tour[] = toursData.map(tour => ({
    id: tour.id,
    slug: tour.slug,
    title: tour.title,
    destinationSlug: tour.destination_slug as any,
    destinationName: tour.destination_name,
    categorySlug: tour.category_slug,
    categoryName: tour.category_name,
    shortDescription: tour.short_description || '',
    durationNights: tour.duration_nights,
    durationDays: tour.duration_days,
    startingCity: tour.starting_city || '',
    basePricePerPerson: parseFloat(tour.base_price_per_person),
    activeSeasonName: tour.active_season_name,
    heroImageUrl: cleanUrl(tour.hero_image_url),  // ✅ CLEANED URL
    galleryImages: [],
    inclusions: [],
    exclusions: [],
    itinerary: [],
    isFeatured: tour.is_featured
  }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-baseline justify-between mb-4">
        <h1 className="text-2xl font-semibold">All tours</h1>
        <p className="text-sm text-slate-500">{tours.length} tours</p>
      </div>
      <Suspense fallback={<div>Loading filters...</div>}>
        <TourFilters />
      </Suspense>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
}
