'use client';

import { useRouter, useSearchParams } from 'next/navigation';

const destinations = [
  { label: 'All', value: '' },
  { label: 'Himachal', value: 'himachal-pradesh' },
  { label: 'Uttarakhand', value: 'uttarakhand' },
  { label: 'Rajasthan', value: 'rajasthan' },
  { label: 'Pilgrimage', value: 'pilgrimage' },
];

export function TourFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentDestination = searchParams.get('destination') ?? '';

  function onDestinationChange(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set('destination', value);
    else params.delete('destination');
    const qs = params.toString();
    router.push(qs ? `/tours?${qs}` : '/tours');
  }

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {destinations.map((d) => (
        <button
          key={d.value || 'all'}
          onClick={() => onDestinationChange(d.value)}
          className={`rounded-full border px-3 py-1 text-xs ${
            currentDestination === d.value
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'border-slate-300 text-slate-600 hover:bg-slate-100'
          }`}
        >
          {d.label}
        </button>
      ))}
    </div>
  );
}
