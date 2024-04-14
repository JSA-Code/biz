import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "price",
  title: "Price",
  fields: [
    defineField({
      type: "string",
      name: "heading",
      title: "Heading",
      description: "Write the main heading",
    }),
    defineField({
      type: "string",
      name: "subheading",
      title: "Subheading",
      description: "Write the main subheading",
    }),
    defineField({
      type: "array",
      name: "prices",
      title: "Price List",
      of: [
        defineArrayMember({
          type: "object",
          name: "priceComp",
          title: "Price Component",
          fields: [
            defineField({
              type: "string",
              name: "heading",
              title: "Heading",
              description: "Write the type of pricing",
            }),
            defineField({
              type: "string",
              name: "subheading",
              title: "Subheading",
              description: "Write the description of the pricing",
            }),
            defineField({
              type: "string",
              name: "frequency",
              title: "Frequency",
              description: "Write how often the client will be charged",
            }),
            defineField({
              type: "string",
              name: "buttonLabel",
              title: "Button Label",
              description: "Write an action word",
            }),
            defineField({
              type: "url",
              name: "buttonLink",
              title: "Button Link",
              description: "Write a link",
            }),
            defineField({
              type: "number",
              name: "price",
              title: "Price",
              description: "Write a price ($)",
            }),
            defineField({
              type: "array",
              name: "featureList",
              title: "Feature List",
              of: [
                defineArrayMember({
                  type: "string",
                  name: "feature",
                  title: "Feature",
                  description: "Write all the associated features",
                }),
              ],
            }),
            defineField({
              type: "image",
              name: "icon",
              title: "Icon",
              description: "Replace icon",
              options: {
                hotspot: true,
              },
              // validation: (rule) => rule.required(),
              fields: [
                defineField({
                  type: "string",
                  name: "alt",
                  title: "Alternative Text",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});
