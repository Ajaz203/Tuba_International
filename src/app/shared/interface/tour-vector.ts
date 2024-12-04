import { booking, popularDestination } from "./hotel-vector";

export interface tourVector{
  exploreThemes: exploreTheme[];
  booking: booking[];
  popularDestination: popularDestination[];
  blog: number[];
}

export interface exploreTheme{
  id: number;
  title: string;
  image: string;
  destination: number;
}
