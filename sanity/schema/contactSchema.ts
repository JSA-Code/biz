import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "contact",
  title: "Contact",
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
      type: "object",
      name: "primaryButton",
      title: "Primary Button",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
      fields: [
        defineField({
          type: "string",
          name: "primaryLabel",
          title: "Button Label",
          description: "Write an action word",
        }),
        defineField({
          type: "url",
          name: "primaryLink",
          title: "Button Link",
          description: "Enter the URL this button should link to",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https", "mailto", "tel"],
            }),
        }),
      ],
    }),
    defineField({
      type: "object",
      name: "secondaryButton",
      title: "Seconday Button",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
      fields: [
        defineField({
          type: "string",
          name: "secondaryLabel",
          title: "Button Label",
          description: "Write an action word",
        }),
        defineField({
          type: "url",
          name: "secondaryLink",
          title: "Button Link",
          description: "Enter the URL this button should link to",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https", "mailto", "tel"],
            }),
        }),
      ],
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
});
