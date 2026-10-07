export interface ArticleSection {
  heading?: string;
  body: string[];
  quote?: string;
  specs?: { label: string; value: string }[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Brewing Guides' | 'Origins & Farms' | 'Roastery Notes' | 'Bakery & Pairings' | 'Cafe Culture' | 'Seasonal & Cold';
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coverImage: string;
  imageCaption: string;
  excerpt: string;
  sections: ArticleSection[];
  tags: string[];
  featured?: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'Espresso Bar' | 'Filter & Pour Over' | 'Seasonal & Cold' | 'Artisan Bakery' | 'Brunch & Plates';
  price: string;
  description: string;
  tastingNotes?: string[];
  origin?: string;
  dietary?: ('Vegan' | 'Vegetarian' | 'Gluten-Free' | 'Dairy-Free')[];
  isSeasonal?: boolean;
  isHouseFavorite?: boolean;
}

export interface ReservationForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: number;
  seatingArea: 'Sunlit Main Hall' | 'Roaster Bar' | 'Garden Courtyard';
  specialRequests?: string;
}
