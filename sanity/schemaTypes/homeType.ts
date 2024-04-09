import { defineArrayMember, defineField, defineType } from "sanity";
import { TextIcon } from "@sanity/icons";

export default defineType({
  type: "document",
  name: "home",
  title: "Home",
  icon: TextIcon,
  fields: [
    defineField({
      type: "object",
      name: "hero",
      title: "Hero",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
      fields: [
        defineField({
          type: "string",
          name: "heading",
          title: "Heading",
          description: "Write a short, introductive heading",
        }),
        defineField({
          type: "string",
          name: "subheading",
          title: "Subheading",
          description: "Write a short, introductive subheading",
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
            {
              type: "string",
              name: "alt",
              title: "Alternative Text",
            },
          ],
        }),
      ],
    }),
    defineField({
      type: "object",
      name: "contact",
      title: "Contact",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
      fields: [
        defineField({
          type: "string",
          name: "heading",
          title: "Heading",
          description: "Write heading name",
        }),
        defineField({
          type: "string",
          name: "subheading",
          title: "Subheading",
          description: "Write your contact information",
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
            {
              type: "string",
              name: "alt",
              title: "Alternative Text",
            },
          ],
        }),
      ],
    }),
    defineField({
      type: "string",
      name: "officeLocation",
      title: "Office Location",
      description: "Set the office location",
    }),
    defineField({
      type: "object",
      name: "review",
      title: "Review",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
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
      ],
    }),
    defineField({
      type: "object",
      name: "services",
      title: "Services",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
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
          name: "serviceList",
          title: "Service List",
          of: [
            defineArrayMember({
              type: "object",
              name: "service",
              title: "Service",
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
                    {
                      type: "string",
                      name: "alt",
                      title: "Alternative Text",
                    },
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});
