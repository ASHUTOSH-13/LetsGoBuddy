import { notFound } from 'next/navigation';
import { getTourBySlug } from '@/lib/api-client';
import { TourHero } from '@/components/tour-detail/TourHero';
import { TourItinerary } from '@/components/tour-detail/TourItinerary';
import { TourBookingSidebar } from '@/components/tour-detail/TourBookingSidebar';
import { Tour, TourDetail } from '@/lib/types';

interface Props {
  params: Promise<{ destination: string; slug: string }>;
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params;
  
  let tour: TourDetail;

  try {
    tour = await getTourBySlug(slug);
  } catch {
    notFound();
  }

  // Convert backend TourDetail to frontend Tour (components expect this)
  const frontendTour: Tour = {
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
    heroImageUrl: tour.hero_image_url || '',
    galleryImages: tour.gallery_images || [],
    inclusions: tour.inclusions || [],
    exclusions: tour.exclusions || [],
    itinerary: tour.itinerary.map(day => ({
      dayNumber: day.day_number,
      title: day.title,
      description: day.description || ''
    })),
    isFeatured: tour.is_featured
  };

  return (
    <>
      <TourHero tour={frontendTour} />
      <div className="mx-auto max-w-6xl px-4 py-8 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <TourItinerary tour={frontendTour} />
          <section>
            <h2 className="text-lg font-semibold mb-2">Inclusions</h2>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              {frontendTour.inclusions.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2">Exclusions</h2>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              {frontendTour.exclusions.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
        <TourBookingSidebar tour={frontendTour} />
      </div>
    </>
  );
}
