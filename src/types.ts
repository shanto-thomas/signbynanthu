export type NavigationTab =
  | 'selected-works'
  | 'stories-and-editorial'
  | 'films-and-motion'
  | 'about-and-philosophy'
  | 'journal'
  | 'inquire-and-book';

export interface PhotoVignette {
  id: string;
  title: string;
  location: string;
  category: 'Como & Amalfi' | 'Parisian Salons' | 'Rajasthan Palaces' | 'Analog 35mm' | 'Monochrome';
  imageUrl: string;
  altText: string;
  figureNumber?: string;
  caption?: string;
  aspect?: string;
  filmStock?: string;
  camera?: string;
}

export interface LoveStory {
  id: string;
  couple: string;
  subtitle: string;
  location: string;
  date: string;
  coverImage: string;
  altText: string;
  teaser: string;
  fullStory: string;
  framesCount: number;
  featured?: boolean;
  filmFormat?: string;
  quote?: string;
  gallery: { url: string; caption: string; alt: string }[];
  palette?: string[];
}

export interface CinemaFilm {
  id: string;
  title: string;
  duration: string;
  format: string;
  location: string;
  coverImage: string;
  altText: string;
  summary: string;
  logline: string;
  directorNote: string;
  scoreCredit: string;
  laurels?: string[];
  featured?: boolean;
}

export interface EditorialPress {
  id: string;
  publication: string;
  headline: string;
  issue: string;
  coverImage: string;
  altText: string;
  excerpt: string;
}

export interface BookingInquiry {
  partnerOne: string;
  partnerTwo: string;
  email: string;
  phone: string;
  eventDate: string;
  location: string;
  venue: string;
  guestCount: string;
  budgetRange: string;
  services: string[];
  loveStory: string;
  howDidYouFindUs: string;
}
