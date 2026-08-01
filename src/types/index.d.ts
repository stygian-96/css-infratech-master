interface PressItem {
  id: string;
  title: string;
  publicationName: string;
  publicationDate: string;
  url: string | null;
  imageUrl: string;
  excerpt: string;
  sortOrder: number;
  pressId: string;
  createdAt: string;
  updatedAt: string;
}

interface PressCategory {
  id: string;
  name: string;
  description: string;
  slug: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  items: PressItem[];
}

interface PressResponse {
  pressCategories: PressCategory[];
  count?: number;
}
