import { hotelLocation, hotelReview, images } from "./hotel";

export interface tour{
  tour: tours[]
}

export interface tours{
  id: number;
  img: string;
  title: string;
  description: string;
  days: number;
  night: number;
  tripDetails: string;
  include: string;
  images: images[];
  tag: boolean;
  tagTitle?: string;
  category: string;
  rating: number;
  price: number;
  discountPrice: number;
  trip: string;
  flights: string;
  travelType: string;
  deal?: boolean;
  dealText?: string;
  includesDetails: includesDetails[];
  tags: string[];
}

export interface includesDetails{
  icon: string;
  title: string;
  includes: boolean;
}

export interface tourDetails{
  tour: tourDetail[];
  tourClassicGallery: tourClassicGallery[];
}

export interface tourDetail{
  highlight: tourHighlight[];
  itinerary: tourItinerary[];
  gallery: tourGallery[];
  accommodation: tourAccommodation[];
  location: hotelLocation;
  review: hotelReview[];
  policy: tourPolicy[];
}

export interface tourHighlight{
  title?: string;
  description?: string;
  textClass?: string;
  data?: highlightData[];
  image?: string;
  highLightPosition?: string;
}

export interface highlightData{
  title: string;
  details: highlightDetails[]
}

export interface highlightDetails{
  data: string;
}

export interface tourItinerary{
  id: number;
  title: string;
  description: string;
  facility: tourFacility[]
}

export interface tourFacility{
  title: string;
  icon: string;
}

export interface tourGallery{
  id: number;
  url: string;
}

export interface tourAccommodation{
  id: number;
  hotelName: string;
  description: string;
  location: string;
  img: string;
  review: number;
  rating: number;
  hotelFacility: string[];
}

export interface tourPolicy{
  title: string;
  details: highlightDetails[]
}

export interface tourClassicGallery{
  id: number;
  title: string;
  subTitle?: string;
  image?: string;
}
