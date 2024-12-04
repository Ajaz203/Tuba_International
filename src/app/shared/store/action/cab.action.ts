import { priceFilter } from "../../interface/hotel";

// Cab Filter
export class getCab {
  static readonly type = '[cab] Get';
  constructor(public filter: string[], public price: priceFilter) {}
}
