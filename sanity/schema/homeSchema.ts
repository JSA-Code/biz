import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "home",
  title: "Home",
  fields: [
    defineField({
      type: "object",
      name: "documents",
      fields: [
        defineField({
          type: "reference",
          name: "hero",
          title: "Hero",
          to: [{ type: "hero" }],
          options: {
            disableNew: true,
          },
        }),
        defineField({
          type: "reference",
          name: "contact",
          title: "Contact",
          to: [{ type: "contact" }],
          options: {
            disableNew: true,
          },
        }),
        defineField({
          type: "reference",
          name: "office",
          title: "Office",
          to: [{ type: "office" }],
          options: {
            disableNew: true,
          },
        }),
        defineField({
          type: "reference",
          name: "review",
          title: "Review",
          to: [{ type: "review" }],
          options: {
            disableNew: true,
          },
        }),
        defineField({
          type: "reference",
          name: "service",
          title: "Service",
          to: [{ type: "service" }],
          options: {
            disableNew: true,
          },
        }),
        defineField({
          type: "reference",
          name: "price",
          title: "Price",
          to: [{ type: "price" }],
          options: {
            disableNew: true,
          },
        }),
      ],
    }),
  ],
});
