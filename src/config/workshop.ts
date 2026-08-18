export const workshopConfig = {
  instructor: {
    name: 'Anuj Kesari',
    bio: 'Anuj teaches practical Meta Ads, Google Ads and online advertising in a simple, beginner-friendly way — helping new businesses attract customers and grow online.',
    photoUrl: '/assets/images/instructor.jpg',
  },
  assets: {
    academyLogo: '/assets/images/WhatsApp_Image_2026-08-17_at_13.42.24.jpeg',
    certificatePreview: '/assets/images/image.png',
    workshopPoster: '/assets/images/image copy.png',
  },
  workshop: {
    title: 'Learn How to Run Meta Advertisements',
    eyebrow: 'LIVE WORKSHOP',
    price: 149,
    currency: '₹',
    date: 'Sunday, 23 August 2026',
    time: '1:00 PM – 3:00 PM',
    duration: '2 Hours',
    platform: 'Google Meet',
    meetLink: 'https://meet.google.com/placeholder', // Replace with real link later
    certificate: 'Certificate of Completion',
  },
  registration: {
    whatsappNumber: '+917235851971', // Replace with real number later
    ctaLabel: 'Join the Workshop',
  },
} as const;

export type WorkshopConfig = typeof workshopConfig;
