import { socialGallery } from "./hotel-classic";

export interface restaurantClassic{
  category: number[];
  breakfast: breakfast[];
  service: number[];
  dishes: number[];
  meal: number[];
  testimonial: number[];
  socialGallery: socialGallery[];
}

export interface breakfast{
  id: number;
  title: string;
  image: string;
  rating: number;
  type: string;
}
