import { ModelObject } from "./model-object";
import { Shop } from "./shop";
import { Vendor } from "./vendor";

export interface Order extends ModelObject {
  number?: String;
  type?: String;
  date?: Date;
  status?: String;
  storeComment?: String;
  vendor?: Vendor;
  shop?: Shop;
}