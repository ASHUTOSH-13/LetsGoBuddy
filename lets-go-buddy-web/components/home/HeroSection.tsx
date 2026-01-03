import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <p className="uppercase tracking-[0.2em] text-xs text-indigo-300 mb-3">
            Trips for 18–35 year olds
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Your next great trip, planned like a buddy would.
          </h1>
          <p className="mt-4 text-slate-200">
            Hill escapes, desert nights, and soulful pilgrimages across India.
            Transparent pricing, young vibes, and human support on every trip.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/tours"
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-400"
            >
              Explore Hill Trips
            </Link>
            <a
              href="https://wa.me/7017714708?text=Hi%2C%20I%20want%20to%20plan%20a%20trip%20with%20Lets%20Go%20Buddy"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-500 px-5 py-2.5 text-sm font-medium hover:bg-slate-800"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-300">
            <span className="rounded-full bg-slate-800 px-3 py-1">
              Young traveller friendly
            </span>
            <span className="rounded-full bg-slate-800 px-3 py-1">
              Curated itineraries
            </span>
            <span className="rounded-full bg-slate-800 px-3 py-1">
              Transparent pricing
            </span>
          </div>
        </div>
        <div className="rounded-3xl bg-slate-900/60 border border-slate-700 p-4 md:p-6">
          <div
            className="aspect-[4/3] w-full rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage:
                'url(poster-2.png)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
