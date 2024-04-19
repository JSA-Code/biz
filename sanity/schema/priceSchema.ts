import { defineArrayMember, defineField, defineType } from "sanity";
import { BillIcon } from "@sanity/icons";

export default defineType({
  type: "document",
  name: "price",
  title: "Price",
  icon: BillIcon,
  fields: [
    defineField({
      type: "string",
      name: "heading",
      title: "Heading",
      description: "Write the main heading",
      validation: (rule) => rule.max(200),
    }),
    defineField({
      type: "string",
      name: "subheading",
      title: "Subheading",
      description: "Write the main subheading",
      validation: (rule) => rule.max(400),
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
              validation: (rule) => rule.max(100),
            }),
            defineField({
              type: "string",
              name: "subheading",
              title: "Subheading",
              description: "Write the description of the pricing",
              validation: (rule) => rule.max(200),
            }),
            defineField({
              type: "string",
              name: "frequency",
              title: "Frequency",
              description: "Write how often the client will be charged",
              validation: (rule) => rule.max(30),
            }),
            defineField({
              type: "string",
              name: "buttonLabel",
              title: "Button Label",
              description: "Write an action word",
              validation: (rule) => rule.max(30),
            }),
            defineField({
              type: "url",
              name: "buttonLink",
              title: "Button Link",
              description: "Write a link",
              validation: (rule) =>
                rule.uri({
                  scheme: ["http", "https", "mailto", "tel"],
                  allowRelative: true,
                }),
            }),
            defineField({
              type: "number",
              name: "price",
              title: "Price",
              description: "Write a price ($)",
              validation: (rule) => rule.positive().precision(2),
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
                  validation: (rule) => rule.max(60),
                }),
              ],
              validation: (rule) => rule.max(5),
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
                  validation: (rule) => rule.max(100),
                }),
              ],
            }),
          ],
        }),
      ],
      validation: (rule) => rule.max(3),
    }),
  ],
});
