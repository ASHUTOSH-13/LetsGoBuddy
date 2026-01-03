import Link from 'next/link';
import { getFeaturedTours } from '@/lib/mock-data/tours';
import { TourCard } from '@/components/tours/TourCard';

export function FeaturedToursSection() {
  const featured = getFeaturedTours();

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-xl md:text-2xl font-semibold">Featured tours</h2>
        <Link
          href="/tours"
          className="text-sm text-indigo-600 hover:text-indigo-500"
        >
          View all tours
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
}
