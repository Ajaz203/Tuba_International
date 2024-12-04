
export interface hotelVector{
  topOffers: topOffers[];
  popularDestination: popularDestination[];
  booking: booking[];
  blog: number[]
}

export interface topOffers{
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface popularDestination{
  id: number;
  countryName: string;
  image: string;
  price: number;
}

export interface booking{
  id: number;
  title: string;
  image: string;
}
