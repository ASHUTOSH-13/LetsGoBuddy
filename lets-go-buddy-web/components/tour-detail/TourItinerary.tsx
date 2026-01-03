'use client';

import { Tour } from '@/lib/types';
import { useState } from 'react';

interface Props {
  tour: Tour;
}

export function TourItinerary({ tour }: Props) {
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  return (
    <section>
      <h2 className="text-lg font-semibold mb-3">About this tour</h2>
      <div className="space-y-2">
        {tour.itinerary.map((day) => {
          const isOpen = expandedDay === day.dayNumber;
          return (
            <div
              key={day.dayNumber}
              className="border border-slate-200 rounded-xl overflow-hidden bg-white"
            >
              <button
                type="button"
                className="w-full flex justify-between items-center px-4 py-3 text-sm font-medium"
                onClick={() =>
                  setExpandedDay(isOpen ? null : day.dayNumber)
                }
              >
                <span>
                  📅 Day {day.dayNumber}: {day.title}
                </span>
                <span className="text-xs text-slate-500">
                  {isOpen ? 'Hide' : 'Show'}
                </span>
              </button>
              {isOpen && (
                <div className="px-4 pb-4 text-sm text-slate-700">
                  {day.description}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
