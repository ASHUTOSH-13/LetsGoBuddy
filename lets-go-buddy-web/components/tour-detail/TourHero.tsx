import { Tour } from '@/lib/types';

interface Props {
  tour: Tour;
}

export function TourHero({ tour }: Props) {
  return (
    <section className="bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-indigo-300 mb-2">
              {tour.destinationName}
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {tour.title}
            </h1>
            <p className="text-sm text-slate-200 mb-4">
              {tour.shortDescription}
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-slate-200">
              <span className="rounded-full bg-slate-800 px-3 py-1">
                {tour.durationDays}D / {tour.durationNights}N
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1">
                Starts from ₹{tour.basePricePerPerson.toLocaleString('en-IN')} per
                person
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1">
                {tour.activeSeasonName}
              </span>
            </div>
          </div>
          <div
            className="rounded-2xl border border-slate-700 bg-cover bg-center h-48 md:h-64"
            style={{ backgroundImage: `url(${tour.heroImageUrl})` }}
          />
        </div>
      </div>
    </section>
  );
}
