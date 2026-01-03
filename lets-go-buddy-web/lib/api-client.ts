import { TourListItem, TourDetail, EnquiryCreateFormData } from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

export async function getTours(destination?: string) {
  const url = new URL('/tours', API_BASE_URL);
  if (destination) {
    url.searchParams.set('destination', destination);
  }
  
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error('Failed to fetch tours');
  return res.json() as Promise<TourListItem[]>;
}

export async function getTourBySlug(slug: string): Promise<TourDetail> {
  const res = await fetch(`${API_BASE_URL}/tours/${slug}`);
  if (!res.ok) throw new Error('Tour not found');
  return res.json();
}

export async function createEnquiry(formData: EnquiryCreateFormData) {
  const res = await fetch(`${API_BASE_URL}/enquiries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  if (!res.ok) throw new Error('Failed to create enquiry');
  return res.json();
}
