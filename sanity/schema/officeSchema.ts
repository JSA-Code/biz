import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "office",
  title: "Office",
  fields: [
    defineField({
      type: "string",
      name: "location",
      description: "Set the office location",
    }),
  ],
});
