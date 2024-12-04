import { priceFilter } from "../../interface/hotel";

// Flight Filter
export class getFlights {
  static readonly type = '[flight] Get';
  constructor(public filter: string[], public price: priceFilter) {}
}
