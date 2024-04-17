import { defineField, defineType } from "sanity";
import { PinIcon } from "@sanity/icons";

export default defineType({
  type: "document",
  name: "office",
  title: "Office",
  icon: PinIcon,
  fields: [
    defineField({
      type: "string",
      name: "location",
      description: "Set the office location",
      validation: (rule) => rule.max(60),
    }),
  ],
});
