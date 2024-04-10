import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "home",
  title: "Home",
  fields: [
    defineField({
      type: "array",
      name: "docList",
      title: "Document List",
      validation: (rule) => rule.required(),
      of: [
        defineArrayMember({
          type: "reference",
          name: "docRef",
          title: "Document Reference",
          to: [
            { type: "hero" },
            { type: "contact" },
            { type: "office" },
            { type: "review" },
            { type: "service" },
            { type: "price" },
          ],
        }),
      ],
    }),
  ],
});
