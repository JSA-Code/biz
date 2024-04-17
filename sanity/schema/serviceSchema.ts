import { defineArrayMember, defineField, defineType } from "sanity";
import { CaseIcon } from "@sanity/icons";

export default defineType({
  type: "document",
  name: "service",
  title: "Service",
  icon: CaseIcon,
  fields: [
    defineField({
      type: "string",
      name: "heading",
      title: "Heading",
      description: "Write the main heading",
      validation: (rule) => rule.max(60),
    }),
    defineField({
      type: "string",
      name: "subheading",
      title: "Subheading",
      description: "Write the main subheading",
      validation: (rule) => rule.max(200),
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
              validation: (rule) => rule.max(30),
            }),
            defineField({
              type: "string",
              name: "subheading",
              title: "Subheading",
              description: "Write the description of the service",
              validation: (rule) => rule.max(60),
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
                  validation: (rule) => rule.max(60),
                }),
              ],
            }),
          ],
        }),
      ],
      validation: (rule) => rule.max(6),
    }),
  ],
});
