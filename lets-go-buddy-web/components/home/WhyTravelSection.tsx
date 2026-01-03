export function WhyTravelSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-12">
      <div className="grid gap-8 md:grid-cols-2 items-center rounded-3xl bg-white shadow-sm border border-slate-200 p-8">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Why travel with Lets Go Buddy?
          </h2>
          <p className="text-slate-600 mb-4">
            Trips curated by travellers in their 20s and 30s, focused on real
            experiences, not checklists.
          </p>
          <ul className="space-y-3 text-sm text-slate-700">
            <li>● Curated itineraries with hand‑picked stays and activities.</li>
            <li>● Clear pricing with no forced shopping stops.</li>
            <li>● Human support over WhatsApp and calls at every step.</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-slate-900 text-slate-100 p-6">
          <p className="text-sm font-medium mb-2">Need quick help?</p>
          <p className="text-sm">
            Email: <span className="underline">letsgobuddytravels@gmail.com</span>
          </p>
          <p className="mt-2 text-xs text-slate-300">
            We usually respond within a few hours. For urgent travel, call us
            directly.
          </p>
        </div>
      </div>
    </section>
  );
}
