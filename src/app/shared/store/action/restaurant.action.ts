import { priceFilter } from "../../interface/hotel";

// Restaurant Filter
export class getRestaurant {
  static readonly type = '[restaurant] Get';
  constructor(public filter: string[], public price: priceFilter) {}
}
