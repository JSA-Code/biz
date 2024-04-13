import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "review",
  title: "Review",
  fields: [
    defineField({
      type: "array",
      name: "reviews",
      title: "Review List",
      of: [
        defineArrayMember({
          type: "object",
          name: "reviewComp",
          title: "Review Component",
          fields: [
            defineField({
              type: "string",
              name: "heading",
              title: "Heading",
              description: "Write the testimonials written by customers",
            }),
            defineField({
              type: "string",
              name: "name",
              title: "Name",
              description: "Write the name of the customer",
            }),
            defineField({
              type: "string",
              name: "company",
              title: "Company",
              description: "Write the customer's job company name",
            }),
            defineField({
              type: "url",
              name: "link",
              title: "Source Link",
              description: "Enter the URL this button should link to",
              validation: (Rule) =>
                Rule.uri({
                  scheme: ["http", "https", "mailto", "tel"],
                }),
            }),
            defineField({
              type: "image",
              name: "image",
              title: "Image",
              description: "Replace image",
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
