'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('Contact form (mock):', form);
    alert('Thanks for reaching out! (mock) We will connect with you soon.');
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
      <div>
        <h1 className="text-2xl font-semibold mb-2">Contact us</h1>
        <p className="text-sm text-slate-700 mb-4">
          Have questions about a trip, want a customised plan, or need help
          choosing the right package? Share a few details and the team will get
          back to you.
        </p>
        <form onSubmit={handleSubmit} className="space-y-3 text-sm">
          <div>
            <label className="block mb-1">Your name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block mb-1">Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block mb-1">How can we help?</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-indigo-600 text-white px-5 py-2 text-sm font-semibold hover:bg-indigo-500"
          >
            Submit (mock)
          </button>
        </form>
      </div>
      <aside className="rounded-2xl border border-slate-200 bg-white p-5 text-sm space-y-3">
        <h2 className="font-semibold mb-1">Quick contacts</h2>
        <p className="text-slate-700">
          Email:{' '}
          <span className="underline">letsgobuddytravels@gmail.com</span>
        </p>
        <p className="text-slate-700">Phone: +91 70177 14708</p>
        <p className="text-slate-700">
          WhatsApp:{' '}
          <a
            href="https://wa.me/7017714708"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Chat on WhatsApp
          </a>
        </p>
        <p className="text-xs text-slate-500">
          Response time is usually a few hours on business days. For urgent
          last‑minute plans, call or WhatsApp directly.
        </p>
      </aside>
    </div>
  );
}
