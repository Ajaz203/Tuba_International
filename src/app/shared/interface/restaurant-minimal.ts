import { images } from "./hotel";
import { booking } from "./hotel-vector";

export interface restaurantMinimal{
  category: restaurantCategory[];
  banner: restaurantBanner[];
  booking: booking[];
  restaurant: number[];
}

export interface restaurantCategory{
  id: number;
  title: string;
  restaurant: number;
  image: string;
}

export interface restaurantBanner{
  id: number;
  title: string;
  subTitle: string;
  image: string;
  right?: boolean;
  left?: boolean;
}

export interface restaurant{
  restaurant: restaurantDetail[];
}

export interface restaurantDetail{
  id: number;
  restaurantName: string;
  image: string;
  images: images[];
  foodList: string;
  time: string;
  price: number;
  rating: number;
  tag: boolean;
  tagTitle?: string;
  restaurantType: string;
  popular: string;
  cuisines: string;
  delivery: string;
  tags: string[];
}
