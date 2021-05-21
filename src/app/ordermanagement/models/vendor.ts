import { Address } from "./address";
import { ModelObject } from "./model-object";

export interface Vendor extends ModelObject {
  name?: String;
  address?: Address;
}