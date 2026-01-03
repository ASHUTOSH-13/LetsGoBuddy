'use client';

import { Tour } from '@/lib/types';
import { useState } from 'react';
import { createEnquiry } from '@/lib/api-client';

interface Props {
  tour: Tour;
}

export function TourBookingSidebar({ tour }: Props) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    travelers: 1,
    month: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setFormState((s) => ({ ...s, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      tour_slug: tour.slug,
      full_name: formState.name,
      email: formState.email || undefined,
      phone: formState.phone,
      number_of_travelers: formState.travelers,
      preferred_month: formState.month || undefined,
      message: formState.message || undefined,
    };

    try {
      await createEnquiry(formData);
      alert('✅ Enquiry submitted! Team will contact you within 24 hours.');
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        phone: '',
        city: '',
        travelers: 1,
        month: '',
        message: '',
      });
    } catch (error) {
      console.error('Enquiry error:', error);
      alert('❌ Failed to submit. Please try WhatsApp or refresh and try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  const whatsappText = encodeURIComponent(
    `Hi, I am interested in ${tour.title} for ${formState.travelers} people in ${
      formState.month || 'upcoming months'
    }.`,
  );

  return (
    <aside className="rounded-2xl border border-slate-200 bg-white shadow-sm p-4 md:p-5 space-y-4">
      <div className="flex items-baseline justify-between">
        <h2 className="text-sm font-semibold">Book this tour</h2>
        <div className="text-xs rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 font-semibold">
          From ₹{tour.basePricePerPerson.toLocaleString('en-IN')}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3 text-xs">
        <div>
          <label className="block mb-1">Your name</label>
          <input
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-xs disabled:bg-slate-50"
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-xs disabled:bg-slate-50"
          />
        </div>
        <div>
          <label className="block mb-1">Phone</label>
          <input
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-xs disabled:bg-slate-50"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block mb-1">City</label>
            <input
              name="city"
              value={formState.city}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-xs disabled:bg-slate-50"
            />
          </div>
          <div>
            <label className="block mb-1">Travellers</label>
            <input
              name="travelers"
              type="number"
              min={1}
              value={formState.travelers}
              onChange={(e) =>
                setFormState((s) => ({
                  ...s,
                  travelers: Number(e.target.value || 1),
                }))
              }
              disabled={isSubmitting}
              className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-xs disabled:bg-slate-50"
            />
          </div>
        </div>
        <div>
          <label className="block mb-1">Preferred month</label>
          <input
            name="month"
            value={formState.month}
            onChange={handleChange}
            placeholder="e.g. Jan, Feb"
            disabled={isSubmitting}
            className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-xs disabled:bg-slate-50"
          />
        </div>
        <div>
          <label className="block mb-1">Anything specific?</label>
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            rows={3}
            disabled={isSubmitting}
            className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-xs disabled:bg-slate-50"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-indigo-600 text-white py-2 text-xs font-semibold hover:bg-indigo-500 disabled:bg-indigo-400"
        >
          {isSubmitting ? 'Submitting...' : 'Submit enquiry'}
        </button>
      </form>
      <a
        href={`https://wa.me/7017714708?text=${whatsappText}`}
        target="_blank"
        rel="noreferrer"
        className="block w-full text-center rounded-full border border-emerald-500 text-emerald-600 py-2 text-xs font-semibold hover:bg-emerald-50"
      >
        Enquire on WhatsApp
      </a>
      <div className="border-t border-slate-200 pt-3 text-[11px] text-slate-500">
        <p className="font-semibold mb-1">Pay via QR after confirmation</p>
        <div className="flex gap-3 items-center">
          <div className="h-14 w-14 rounded-md bg-slate-200 flex items-center justify-center text-[10px] text-slate-500">
            QR
          </div>
          <p>
            Once we confirm your dates and availability, we will share the exact
            payable amount and QR code for secure payment.
          </p>
        </div>
      </div>
    </aside>
  );
}
