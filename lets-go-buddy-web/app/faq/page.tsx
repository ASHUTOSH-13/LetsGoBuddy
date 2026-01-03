export default function FaqPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 space-y-6">
      <h1 className="text-2xl font-semibold mb-2">Frequently asked questions</h1>

      <section className="space-y-2 text-sm text-slate-700">
        <h2 className="font-semibold">How do I confirm a booking?</h2>
        <p>
          For now, you submit an enquiry on the trip page or contact us on
          WhatsApp. The team will confirm dates, price, and availability and
          then share QR/payment details to block your seat.
        </p>
      </section>

      <section className="space-y-2 text-sm text-slate-700">
        <h2 className="font-semibold">Is pricing fixed or dynamic?</h2>
        <p>
          Prices shown are per person starting prices and can change based on
          dates, group size, and festive seasons. Final price will always be
          shared clearly before payment.
        </p>
      </section>

      <section className="space-y-2 text-sm text-slate-700">
        <h2 className="font-semibold">Can I customise an itinerary?</h2>
        <p>
          Yes, small customisations like extra nights, hotel category upgrade,
          or adding activities are usually possible. Mention your preferences in
          the enquiry form.
        </p>
      </section>

      <section className="space-y-2 text-sm text-slate-700">
        <h2 className="font-semibold">Do you handle flights or trains?</h2>
        <p>
          Most packages are land‑only by default. Help with flights or trains
          can be discussed on a case‑by‑case basis during planning.
        </p>
      </section>
    </div>
  );
}
