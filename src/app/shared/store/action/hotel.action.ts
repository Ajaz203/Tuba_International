import { priceFilter } from "../../interface/hotel";

// Hotel Filter
export class getHotels {
  static readonly type = '[hotel] Get';
  constructor(public filter: string[], public price: priceFilter) {}
}
