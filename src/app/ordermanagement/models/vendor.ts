import { Address } from "./address";
import { ModelObject } from "./model-object";

export interface Vendor extends ModelObject {
  status?: String;
  name?: String;
  number?: String;
  address?: Address;
}