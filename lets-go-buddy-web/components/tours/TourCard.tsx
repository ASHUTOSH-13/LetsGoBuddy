'use client';

import Link from 'next/link';
import { Tour } from '@/lib/types';

interface Props {
  tour: Tour;
}

export function TourCard({ tour }: Props) {
  return (
    <div className="group rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-xl transition-shadow">
      <div className="relative flex-shrink-0">
        <div
          className="aspect-[4/3] w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
          style={{ backgroundImage: `url(${tour.heroImageUrl})` }}
        />
        <div className="absolute left-3 top-3 rounded-full bg-indigo-600 text-white text-xs px-3 py-1 shadow-lg">
          From ₹{tour.basePricePerPerson.toLocaleString('en-IN')}
        </div>
        <div className="absolute right-3 bottom-3 rounded-full bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 shadow-lg">
          {tour.durationDays}D / {tour.durationNights}N
        </div>
      </div>
      <div className="flex-1 flex flex-col p-6 space-y-3">
        <div className="text-xs uppercase tracking-wide text-indigo-600 font-medium">
          {tour.destinationName}
        </div>
        <h3 className="font-bold text-lg line-clamp-2 leading-tight">{tour.title}</h3>
        <p className="text-sm text-slate-600 line-clamp-2 flex-1">
          {tour.shortDescription}
        </p>
        <div className="flex gap-2 pt-2">
          <Link
            href={`/tours/${tour.destinationSlug}/${tour.slug}`}  // ✅ Fixed: Uses exact backend slugs
            className="flex-1 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm px-6 py-3 hover:shadow-lg hover:scale-[1.02] transition-all duration-200 shadow-md"
          >
            View Details →
          </Link>
          <a
            href={`https://wa.me/7017714708?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(tour.title)}%20from%20${tour.startingCity}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-green-500 text-white font-semibold text-sm px-4 py-3 hover:bg-green-600 hover:shadow-lg transition-all duration-200 shadow-md"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
