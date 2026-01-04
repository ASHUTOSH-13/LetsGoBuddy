'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Tour } from '@/lib/types';

interface Props {
  tour: Tour;
}

// Fallback placeholder (add /public/placeholder-tour.jpg later)
const PLACEHOLDER_URL = '/placeholder-tour.jpg'; // Generic mountain/lake image

export function TourCard({ tour }: Props) {
  const safeHeroUrl = tour.heroImageUrl || PLACEHOLDER_URL;

  return (
    <div className="group rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300">
      <div className="relative flex-shrink-0">
        {/* Next/Image for bulletproof loading + fallback */}
        <div className="aspect-[4/3] w-full relative overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
          <Image
            src={safeHeroUrl}
            alt={`${tour.title} hero image`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw"
            onError={(e) => {
              // Fallback to gradient if image fails
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).parentElement!.style.backgroundImage = 
                'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 50%, #a5b4fc 100%)';
            }}
          />
        </div>
        
        {/* Price badge */}
        <div className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs px-3 py-1.5 shadow-lg backdrop-blur-sm">
          From ₹{tour.basePricePerPerson.toLocaleString('en-IN')}
        </div>
        
        {/* Duration badge */}
        <div className="absolute right-3 bottom-3 rounded-full bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 shadow-lg">
          {tour.durationDays}D/{tour.durationNights}N
        </div>
        
        {/* Featured ribbon */}
        {tour.isFeatured && (
          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full shadow-lg transform rotate-3 font-semibold">
            🔥 Featured
          </div>
        )}
      </div>
      
      <div className="flex-1 flex flex-col p-6 space-y-3">
        {/* Destination tag */}
        <div className="text-xs uppercase tracking-wide text-indigo-600 font-medium bg-indigo-50 px-2.5 py-1 rounded-full w-fit">
          {tour.destinationName}
        </div>
        
        {/* Title */}
        <h3 className="font-bold text-xl leading-tight line-clamp-2 group-hover:text-indigo-700 transition-colors">
          {tour.title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-slate-600 line-clamp-2 flex-1 leading-relaxed">
          {tour.shortDescription}
        </p>
        
        {/* CTAs */}
        <div className="flex gap-2 pt-4">
          <Link
            href={`/tour/${tour.destinationSlug}/${tour.slug}`}
            className="flex-1 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold text-sm px-6 py-3 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 shadow-lg border-0"
            prefetch={false}
          >
            View Details →
          </Link>
          <a
            href={`https://wa.me/7017714708?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(tour.title)}%20(${tour.durationDays}D) from ${tour.startingCity}. Please share itinerary & pricing.`}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-sm px-4 py-3 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 shadow-md"
            aria-label="WhatsApp inquiry"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
