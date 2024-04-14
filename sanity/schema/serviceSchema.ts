import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "service",
  title: "Service",
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
      name: "services",
      title: "Service List",
      of: [
        defineArrayMember({
          type: "object",
          name: "serviceComp",
          title: "Service Component",
          fields: [
            defineField({
              type: "string",
              name: "heading",
              title: "Heading",
              description: "Write the type of service",
            }),
            defineField({
              type: "string",
              name: "subheading",
              title: "Subheading",
              description: "Write the description of the service",
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
