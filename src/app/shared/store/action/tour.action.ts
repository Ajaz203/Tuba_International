import { priceFilter } from "../../interface/hotel";

// Tour Filter
export class getTours {
  static readonly type = '[tour] Get';
  constructor(public filter: string[], public price: priceFilter) {}
}
