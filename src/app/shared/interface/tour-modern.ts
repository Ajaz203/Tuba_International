export interface tourModern{
  category: number[];
  package: number[];
  testimonial: number[];
  gallery: tourGallery[];
  service: number[];
}

export interface categoryModel{
  category: category[]
}

export interface category{
  id: number;
  categoryTitle: string,
  categoryDescription?: string,
  categoryImage: string,
  price: number,
  discountPrice: number,
  days?: number,
  night?: number,
  person?: number,
  coupon_code?: string;
  like?: boolean;
  startFrom?: number;
  rating?: undefined | number;
  car?: string;
  arrivalTime?: string;
  departureTime?: string;
  tag?: boolean;
  tagTitle?: string;
  flightDetails?: flightDetails[];
  discountOn?: string;
  time?: string;
}

export interface tourGallery{
  id: number;
  colClass: string;
  images: images[]
}

export interface images{
  title: string;
  url: string;
  fileType: string;
}

export interface flightDetails{
  city: string;
  price: number;
}
