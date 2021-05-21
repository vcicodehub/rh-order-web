import { Address } from "./address";
import { ModelObject } from "./model-object";

export interface Shop extends ModelObject {
    name?: String;
    address?: Address;
}