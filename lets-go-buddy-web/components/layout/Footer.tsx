import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <div className="font-semibold mb-2">Lets Go Buddy</div>
          <p className="text-slate-400">
            Modern, secure, and hassle-free hill and pilgrimage trips across
            India for young travellers.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-2">Support</div>
          <ul className="space-y-1 text-slate-400">
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/cancellation">Refunds &amp; Cancellation</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            <li>
              <Link href="/terms">Terms &amp; Conditions</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Need quick help?</div>
          <p className="text-slate-400">Email: letsgobuddytravels@gmail.com</p>
          <p className="text-slate-400 mt-1">
            We typically respond within a few hours on business days.
          </p>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Lets Go Buddy. Built for travellers.
      </div>
    </footer>
  );
}
