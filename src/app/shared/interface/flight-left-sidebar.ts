import { airlines } from "./flight-modern";

export interface flightLeftSidebar{
  airlines: airlines[];
  destination: airlineDestination[];
  deals: airlinesDeal[];
}

export interface airlineDestination{
  id: number;
  cityName: string;
  price: number;
  image: string;
  tag: boolean;
  tagText?: string;
}

export interface airlinesDeal{
  id: number;
  from: string;
  to: string;
  price: number;
  date: string;
}
