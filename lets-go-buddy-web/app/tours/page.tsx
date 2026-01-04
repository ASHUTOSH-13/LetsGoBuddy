import { Suspense } from 'react';
import { getTours } from '@/lib/api-client';
import { TourFilters } from '@/components/tours/TourFilters';
import { TourCard } from '@/components/tours/TourCard';
import { TourListItem, Tour } from '@/lib/types';

// 🔥 Enhanced: Strips markdown + fixes unsplash.com/photos → images.unsplash.com/photo-
function cleanHeroUrl(url: string | null | undefined): string {
  if (!url) return '/placeholder.jpg'; // Add to public/ folder
  let clean = url.replace(/\[.*?\]\((.*?)\)/g, '$1').split('?')[0].trim();
  // Fix unsplash.com/photos/ID → images.unsplash.com/photo-ID
  if (clean.includes('unsplash.com/photos/')) {
    const id = clean.split('/photos/')[1];
    clean = `https://images.unsplash.com/photo-${id}`;
  }
  return clean;
}

interface Props {
  searchParams: Promise<{ destination?: string }>;
}

export default async function ToursPage({ searchParams }: Props) {
  const params = await searchParams;
  const destination = params.destination || undefined;
  
  const toursData: TourListItem[] = await getTours(destination);

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
    heroImageUrl: cleanHeroUrl(tour.hero_image_url),  // ✅ FIXED
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
