import { hotelGallery, hotelLocation, hotelReview } from "./hotel";

export interface restaurants{
  restaurantOrders: restaurantOrders[];
  restaurantOverview: restaurantOverview[];
  restaurantGallery: hotelGallery[];
  restaurantLocation: hotelLocation;
  restaurantReview: hotelReview[];
}

export interface restaurantOrders{
  id: number;
  title: string;
  value: string;
  totalItems?: number;
  items?: OrderItems[];
  children?: restaurantOrders[];
  active?: boolean;
}

export interface OrderItems{
  id: number;
  title: string;
  description: string;
  price: number;
  mealType: string;
  itemsValue: number;
  customized?: boolean;
  active?: boolean;
  cartItem?: boolean;
}

export interface restaurantOverview{
  id: number;
  sectionClass: string;
  items: overviewItems[]
}

export interface overviewItems{
  id: number;
  title: string;
  data?: itemsData[];
}

export interface itemsData{
  item: string;
}
