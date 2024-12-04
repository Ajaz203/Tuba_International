import { animatedImage } from "./cab-modern";
import { blogs, hotels } from "./hotel-minimal";

export interface homeSectionModel{
  homeSection: homeSection[];
  hotelImages: animatedImage[];
  ticketSection: number[]
  gallery: gallery[];
  specialRooms: number[];
  service: number[];
  testimonial: number[];
  socialGallery: socialGallery[];
}

export interface homeSection{
  id: number,
  title: string,
  subTitle: string;
  url: string;
}

export interface gallery{
  id: number;
  title: string;
  url: string;
}

export interface hotelRooms{
  hotelRooms: specialRoom[];
  hotel: hotels[];
  blog: blogs[];
}

export interface specialRoom{
  id: number;
  title: string;
  description: string;
  url: string;
  price: number;
  discountPrice: number;
  days: number;
  night: number;
  subTitle: string;
  subTitle2: string;
  barcode: string;
}

export interface services{
  services: service[]
}

export interface service{
  id: number;
  title: string;
  description: string;
  url?: string;
  subTitle?: string;
  rating?: number;
  additionalData?: string;
}

export interface testimonials{
  testimonial: testimonial[]
}

export interface testimonial{
  id: number;
  name: string;
  description: string;
  profileURL: string;
}

export interface socialGallery{
  id: number;
  url: string;
}

