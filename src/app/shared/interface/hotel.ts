export interface hotel{
  hotels: hotels[]
}

export interface hotels{
  id: number;
  hotelName: string;
  description: string;
  location: string;
  img: string;
  images: images[];
  tag: boolean;
  tagTitle?: string;
  review: number;
  category: string;
  district: string;
  facility: string[];
  rating: number;
  language: string;
  tags: string[];
  price: number;
  discountPrice: number;
  deal: boolean;
  dealText?: string;
  hotelFacility: string[]
}

export interface images{
  url: string;
  fileType: string
}


export interface hotelDetails{
  gallery: hotelGallery[];
  details: hotelDetail[];
  hotelBooking: hotelBooking[];
}

export interface hotelGallery{
  id: number;
  image: string;
  imageType: string;
}

export interface hotelDetail{
  about: hotelAbout[];
  rooms: hotelRooms[];
  facility: hotelFacility[];
  location: hotelLocation;
  review: hotelReview[];
  policy: hotelPolicy[];
}

export interface hotelAbout{
  title: string;
  description: string
}

export interface hotelRooms{
  id: number;
  roomType: string;
  roomImage: string;
  amenities: string[];
  inclusion: string[];
  price: number;
  discountPrice: number;
}

export interface hotelFacility{
  id: number;
  data: facilityData[];
}

export interface facilityData{
  title: string;
  icon: string;
  details: string[];
  marginClass?: boolean;
}

export interface hotelLocation{
  url: string;
}

export interface hotelReview{
  id: number;
  title: string;
  by: string;
  date: string;
  review: string;
  rating: number;
}

export interface hotelPolicy{
  details: string;
}

export interface hotelBooking{
  id: number;
  title: string;
  value: string;
  panel: string;
  checkId: string;
  checked: boolean;
}

export interface currency{
  name: string;
  currency: string;value: string;
  symbol: string;
  price: number
}

export interface priceFilter{
  minPrice: number;
  maxPrice: number
}
