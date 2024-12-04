export interface hotelMinimal{
  topCity: topCities[];
  hotels: hotels[];
  blog: number[];
  ricaBenefits: ricaBenefit[];
}

export interface topCities{
  id: number;
  url: string;
  cityName: string;
  totalProperty: number;
}

export interface hotels{
  id: number;
  hotelName: string;
  location: string;
  imageURL: string;
  price: number;
  discountPrice: number;
  totalReview: number;
  rating: number;
}

export interface blog{
  blog: blogs[]
}

export interface blogs{
  id: number;
  blogTitle: string;
  description: string;
  location?: string;
  url: string;
  date: string;
  month: string;
  posted_by?: string;
  posted_date?: string;
}

export interface ricaBenefit{
  id: number;
  title: string;
  description: string;
  icon: string;
}
