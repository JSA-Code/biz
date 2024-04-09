import heroType from "./heroType";
import contactType from "./contactType";
import officeType from "./officeType";
import reviewType from "./reviewType";
import serviceType from "./serviceType";
import priceType from "./priceType";
import type { SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    heroType,
    contactType,
    officeType,
    reviewType,
    serviceType,
    priceType,
  ],
};
