import homeSchema from "./homeSchema";
import heroSchema from "./heroSchema";
import contactSchema from "./contactSchema";
import officeSchema from "./officeSchema";
import reviewSchema from "./reviewSchema";
import serviceSchema from "./serviceSchema";
import priceSchema from "./priceSchema";
import type { SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homeSchema,
    heroSchema,
    contactSchema,
    officeSchema,
    reviewSchema,
    serviceSchema,
    priceSchema,
  ],
};
