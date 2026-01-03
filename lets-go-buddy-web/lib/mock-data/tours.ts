import { Tour } from '@/lib/types';

export const tours: Tour[] = [
  // 1. Himachal – Manali Kasol
  {
    id: 1,
    slug: 'manali-kasol-5n6d',
    title: 'Manali Kasol Getaway – 5N/6D',
    destinationSlug: 'himachal-pradesh',
    destinationName: 'Himachal Pradesh',
    categorySlug: 'himachal-packages',
    categoryName: 'Himachal Packages',
    shortDescription:
      'Cafe hopping, riverside walks, and mountain views across Manali & Kasol.',
    durationNights: 5,
    durationDays: 6,
    startingCity: 'Delhi',
    basePricePerPerson: 15999,
    activeSeasonName: 'Standard Season',
    heroImageUrl:
      '/manali.jpeg',
    galleryImages: [
      'https://via.placeholder.com/800x500?text=Manali',
      'https://via.placeholder.com/800x500?text=Kasol',
    ],
    inclusions: [
      'Accommodation on double/triple sharing.',
      'Daily breakfast and dinner.',
      'Volvo transfers from Delhi to Manali and return.',
    ],
    exclusions: [
      'Personal expenses.',
      'Entry fees and activities.',
      'GST and any other taxes.',
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Delhi to Manali',
        description: 'Overnight journey to Manali by Volvo bus.',
      },
      {
        dayNumber: 2,
        title: 'Manali Local Sightseeing',
        description:
          'Hadimba Temple, Mall Road, and local cafes with free evening.',
      },
      {
        dayNumber: 3,
        title: 'Solang / Atal Tunnel',
        description:
          'Visit Solang Valley and optional snow/adventure activities.',
      },
      {
        dayNumber: 4,
        title: 'Manali to Kasol',
        description: 'Drive to Kasol, riverside walk, and cafe hopping.',
      },
      {
        dayNumber: 5,
        title: 'Kasol & Chalal',
        description:
          'Explore Kasol and short hike to a nearby village (weather permitting).',
      },
      {
        dayNumber: 6,
        title: 'Kasol to Delhi',
        description: 'Return journey to Delhi with amazing memories.',
      },
    ],
    isFeatured: true,
  },

  // 2. Himachal – Shimla Manali
  {
    id: 2,
    slug: 'shimla-manali-6n7d',
    title: 'Classic Shimla Manali – 6N/7D',
    destinationSlug: 'himachal-pradesh',
    destinationName: 'Himachal Pradesh',
    categorySlug: 'himachal-packages',
    categoryName: 'Himachal Packages',
    shortDescription:
      'Toy train vibes, mall roads, and snow views in Shimla & Manali.',
    durationNights: 6,
    durationDays: 7,
    startingCity: 'Delhi',
    basePricePerPerson: 17999,
    activeSeasonName: 'Standard Season',
    heroImageUrl:
      '/shimla.jpg',
    galleryImages: [
      'https://via.placeholder.com/800x500?text=Shimla',
      'https://via.placeholder.com/800x500?text=Kufri',
    ],
    inclusions: [
      'Accommodation in Shimla and Manali.',
      'Daily breakfast and dinner.',
      'Private cab for sightseeing as per itinerary.',
    ],
    exclusions: [
      'Any airfare or train tickets.',
      'Adventure activities charges.',
      'Personal expenses and tips.',
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Delhi to Shimla',
        description: 'Drive from Delhi to Shimla, check-in and evening free.',
      },
      {
        dayNumber: 2,
        title: 'Shimla & Kufri',
        description: 'Jakhoo Temple, Ridge, Mall Road, and Kufri excursion.',
      },
      {
        dayNumber: 3,
        title: 'Shimla to Manali',
        description: 'Scenic drive via Kullu valley and Pandoh Dam.',
      },
      {
        dayNumber: 4,
        title: 'Manali Local',
        description:
          'Hadimba Temple, Vashisht hot springs, Club House, Mall Road.',
      },
      {
        dayNumber: 5,
        title: 'Solang / Rohtang (if open)',
        description:
          'Snow point / Solang Valley with optional skiing and ATV rides.',
      },
      {
        dayNumber: 6,
        title: 'Leisure & Shopping',
        description:
          'Free day to relax, enjoy cafes, or shop for souvenirs in Manali.',
      },
      {
        dayNumber: 7,
        title: 'Manali to Delhi',
        description: 'Return journey to Delhi with hill memories.',
      },
    ],
    isFeatured: true,
  },

  // 3. Uttarakhand – Rishikesh Haridwar
  {
    id: 3,
    slug: 'rishikesh-haridwar-3n4d',
    title: 'Rishikesh Haridwar Escape – 3N/4D',
    destinationSlug: 'uttarakhand',
    destinationName: 'Uttarakhand',
    categorySlug: 'uttarakhand-packages',
    categoryName: 'Uttarakhand Packages',
    shortDescription:
      'River rafting, cafes, and evening aarti on the ghats of Rishikesh & Haridwar.',
    durationNights: 3,
    durationDays: 4,
    startingCity: 'Delhi',
    basePricePerPerson: 8999,
    activeSeasonName: 'Standard Season',
    heroImageUrl:
      '/rishikesh.jpeg',
    galleryImages: [
      'https://via.placeholder.com/800x500?text=Rishikesh',
      'https://via.placeholder.com/800x500?text=Ganga+Aarti',
    ],
    inclusions: [
      'Accommodation in Rishikesh and Haridwar.',
      'Daily breakfast.',
      'Rafting session (standard stretch) in Rishikesh.',
    ],
    exclusions: [
      'Any train or flight tickets.',
      'Any additional activities beyond itinerary.',
      'Meals other than those specified.',
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Delhi to Rishikesh',
        description:
          'Arrive in Rishikesh, explore cafes and attend evening Ganga aarti.',
      },
      {
        dayNumber: 2,
        title: 'Rafting & Adventure',
        description:
          'Enjoy river rafting and optional activities like bungee (extra cost).',
      },
      {
        dayNumber: 3,
        title: 'Rishikesh to Haridwar',
        description:
          'Drive to Haridwar, visit Har Ki Pauri and local markets.',
      },
      {
        dayNumber: 4,
        title: 'Return to Delhi',
        description: 'Check out and return to Delhi.',
      },
    ],
    isFeatured: true,
  },

  // 4. Uttarakhand – Nainital Jim Corbett
  {
    id: 4,
    slug: 'nainital-corbett-4n5d',
    title: 'Nainital & Jim Corbett – 4N/5D',
    destinationSlug: 'uttarakhand',
    destinationName: 'Uttarakhand',
    categorySlug: 'uttarakhand-packages',
    categoryName: 'Uttarakhand Packages',
    shortDescription:
      'Lake city vibes of Nainital with a thrilling safari in Jim Corbett.',
    durationNights: 4,
    durationDays: 5,
    startingCity: 'Delhi',
    basePricePerPerson: 12999,
    activeSeasonName: 'Standard Season',
    heroImageUrl:
      '/nainital.jpeg',
    galleryImages: [
      'https://via.placeholder.com/800x500?text=Nainital+Lake',
      'https://via.placeholder.com/800x500?text=Corbett+Safari',
    ],
    inclusions: [
      'Accommodation in Nainital and Corbett.',
      'Daily breakfast and dinner.',
      'One jeep safari in Jim Corbett National Park.',
    ],
    exclusions: [
      'Camera fees and extra safaris.',
      'Boating charges in Nainital.',
      'Anything not mentioned in inclusions.',
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Delhi to Nainital',
        description:
          'Drive to Nainital, evening at leisure near Mall Road and lake.',
      },
      {
        dayNumber: 2,
        title: 'Nainital Sightseeing',
        description:
          'Naini Lake, Naina Devi Temple, Snow View Point, local markets.',
      },
      {
        dayNumber: 3,
        title: 'Nainital to Corbett',
        description:
          'Drive to Corbett, evening bonfire (subject to weather) and leisure.',
      },
      {
        dayNumber: 4,
        title: 'Corbett Safari',
        description:
          'Early morning jeep safari inside the national park, later free time.',
      },
      {
        dayNumber: 5,
        title: 'Corbett to Delhi',
        description: 'Check out and drive back to Delhi.',
      },
    ],
    isFeatured: false,
  },

  // 5. Rajasthan – Jaipur Udaipur
  {
    id: 5,
    slug: 'jaipur-udaipur-4n5d',
    title: 'Jaipur & Udaipur Royal Getaway – 4N/5D',
    destinationSlug: 'rajasthan',
    destinationName: 'Rajasthan',
    categorySlug: 'rajasthan-packages',
    categoryName: 'Rajasthan Packages',
    shortDescription:
      'Pink city palaces and the lakes of Udaipur in one compact trip.',
    durationNights: 4,
    durationDays: 5,
    startingCity: 'Jaipur',
    basePricePerPerson: 14999,
    activeSeasonName: 'Standard Season',
    heroImageUrl:
      '/jaipur.jpeg',
    galleryImages: [
      'https://via.placeholder.com/800x500?text=Jaipur+Fort',
      'https://via.placeholder.com/800x500?text=Udaipur+Lake',
    ],
    inclusions: [
      'Accommodation in Jaipur and Udaipur.',
      'Daily breakfast.',
      'City tours in both cities with local guide.',
    ],
    exclusions: [
      'Monument entry tickets.',
      'Boat ride charges in Udaipur.',
      'Lunches and dinners.',
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Arrive in Jaipur',
        description:
          'Check-in and visit local markets, optional Chokhi Dhani in evening.',
      },
      {
        dayNumber: 2,
        title: 'Jaipur Forts & City',
        description:
          'Amber Fort, City Palace, Hawa Mahal photo stop, Jantar Mantar.',
      },
      {
        dayNumber: 3,
        title: 'Jaipur to Udaipur',
        description:
          'Drive to Udaipur, evening boat ride on Lake Pichola (optional).',
      },
      {
        dayNumber: 4,
        title: 'Udaipur Sightseeing',
        description:
          'City Palace, Jagdish Temple, Saheliyon Ki Bari, local cafes.',
      },
      {
        dayNumber: 5,
        title: 'Departure',
        description:
          'Free time for shopping, then drop at station/airport.',
      },
    ],
    isFeatured: true,
  },

  // 6. Rajasthan – Jaisalmer Desert
  {
    id: 6,
    slug: 'jaisalmer-desert-3n4d',
    title: 'Best Jaisalmer Desert Camp – 3N/4D',
    destinationSlug: 'rajasthan',
    destinationName: 'Rajasthan',
    categorySlug: 'rajasthan-packages',
    categoryName: 'Rajasthan Packages',
    shortDescription:
      'Golden city fort, sand dunes, camel safari, and starry desert nights.',
    durationNights: 3,
    durationDays: 4,
    startingCity: 'Jaisalmer',
    basePricePerPerson: 11999,
    activeSeasonName: 'Standard Season',
    heroImageUrl:
      '/jaisalmer.jpeg',
    galleryImages: [
      'https://via.placeholder.com/800x500?text=Jaisalmer+Fort',
      'https://via.placeholder.com/800x500?text=Sam+Sand+Dunes',
    ],
    inclusions: [
      'One night in Jaisalmer city hotel and two nights in desert camp.',
      'Camel safari and cultural program at dunes.',
      'Dinner and breakfast at camp.',
    ],
    exclusions: [
      'Jeep safari charges.',
      'Any train or flight tickets.',
      'Lunches and personal expenses.',
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Arrive in Jaisalmer',
        description:
          'City tour covering Jaisalmer Fort, Patwon Ki Haveli, and markets.',
      },
      {
        dayNumber: 2,
        title: 'Sam Sand Dunes',
        description:
          'Transfer to desert camp, camel safari and evening cultural show.',
      },
      {
        dayNumber: 3,
        title: 'Leisure in Desert',
        description:
          'Free time at dunes, optional jeep safari, bonfire under the stars.',
      },
      {
        dayNumber: 4,
        title: 'Departure',
        description: 'Check out and drop at station/airport.',
      },
    ],
    isFeatured: true,
  },

  // 7. Pilgrimage – Varanasi
  {
    id: 7,
    slug: 'varanasi-2n3d',
    title: 'Spiritual Varanasi – 2N/3D',
    destinationSlug: 'pilgrimage',
    destinationName: 'Pilgrimage',
    categorySlug: 'pilgrimage-packages',
    categoryName: 'Pilgrimage Packages',
    shortDescription:
      'Sunrise boat ride, ghats, and temples in India’s spiritual capital.',
    durationNights: 2,
    durationDays: 3,
    startingCity: 'Varanasi',
    basePricePerPerson: 7999,
    activeSeasonName: 'Standard Season',
    heroImageUrl:
      'varanasi.jpeg',
    galleryImages: [
      'https://via.placeholder.com/800x500?text=Varanasi+Ghats',
      'https://via.placeholder.com/800x500?text=Ganga+Aarti',
    ],
    inclusions: [
      'Accommodation in Varanasi.',
      'Daily breakfast.',
      'Morning boat ride on the Ganga (shared).',
    ],
    exclusions: [
      'Puja charges and priest fees.',
      'Any extra boat rides.',
      'Meals other than breakfast.',
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Arrival & Ghats',
        description:
          'Arrive, evening Ganga aarti at Dashashwamedh Ghat and local walk.',
      },
      {
        dayNumber: 2,
        title: 'Boat Ride & Temples',
        description:
          'Sunrise boat ride, Kashi Vishwanath Temple, local streets.',
      },
      {
        dayNumber: 3,
        title: 'Departure',
        description: 'Free time for shopping, then departure.',
      },
    ],
    isFeatured: false,
  },

  // 8. Pilgrimage – Kedarnath (Do Dham style teaser)
  {
    id: 8,
    slug: 'kedarnath-4n5d',
    title: 'Kedarnath Yatra – 4N/5D',
    destinationSlug: 'pilgrimage',
    destinationName: 'Pilgrimage',
    categorySlug: 'pilgrimage-packages',
    categoryName: 'Pilgrimage Packages',
    shortDescription:
      'Trek or pony ride to Kedarnath with guided darshan and scenic drives.',
    durationNights: 4,
    durationDays: 5,
    startingCity: 'Rishikesh',
    basePricePerPerson: 18999,
    activeSeasonName: 'Yatra Season',
    heroImageUrl:
      '/kedarnath.jpg',
    galleryImages: [
      'https://via.placeholder.com/800x500?text=Kedarnath+Temple',
      'https://via.placeholder.com/800x500?text=Himalayan+Views',
    ],
    inclusions: [
      'Transport from Rishikesh to Sonprayag and back (sharing).',
      'Accommodation on the route (basic hotels/guesthouses).',
      'One night stay near Kedarnath (subject to availability).',
    ],
    exclusions: [
      'Helicopter tickets or pony charges.',
      'Any special pooja or VIP darshan.',
      'Meals not mentioned and personal expenses.',
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Rishikesh to Guptkashi/Sonprayag',
        description:
          'Drive through the mountains with scenic stopovers and overnight stay.',
      },
      {
        dayNumber: 2,
        title: 'Trek/Heli to Kedarnath',
        description:
          'Reach Kedarnath by trek or heli (extra cost), evening darshan.',
      },
      {
        dayNumber: 3,
        title: 'Kedarnath to Guptkashi',
        description:
          'Morning darshan, return to base, overnight at Guptkashi/Sonprayag.',
      },
      {
        dayNumber: 4,
        title: 'Return towards Rishikesh',
        description:
          'Drive back, en‑route stops at view points and small temples.',
      },
      {
        dayNumber: 5,
        title: 'Reach Rishikesh & Departure',
        description: 'Trip ends in Rishikesh by evening.',
      },
    ],
    isFeatured: false,
  },
];

export function getFeaturedTours(): Tour[] {
  return tours.filter((t) => t.isFeatured);
}

export function getToursByDestination(slug?: string | null): Tour[] {
  if (!slug) return tours;
  return tours.filter((t) => t.destinationSlug === slug);
}

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}
