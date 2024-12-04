import { brand } from "./cab-modern";
import { ricaBenefit } from "./hotel-minimal";
import { booking } from "./hotel-vector";

export interface cabClassic{
  ricaBenefits: ricaBenefit[];
  booking: booking[];
  carTypes: carTypes[];
  testimonial: number[];
  brand: brand[];
}

export interface carTypes{
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  seat?: boolean;
  luggage?: boolean;
  snow?: boolean;
  setting?: boolean;
}
