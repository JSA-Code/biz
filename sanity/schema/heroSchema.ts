import { defineField, defineType } from "sanity";
import { BoltIcon } from "@sanity/icons";

export default defineType({
  type: "document",
  name: "hero",
  title: "Hero",
  icon: BoltIcon,
  fields: [
    defineField({
      type: "string",
      name: "heading",
      title: "Heading",
      description: "Write a short, introductive heading",
      validation: (rule) => rule.max(60),
    }),
    defineField({
      type: "string",
      name: "subheading",
      title: "Subheading",
      description: "Write a short, introductive subheading",
      validation: (rule) => rule.max(200),
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
          validation: (rule) => rule.max(20),
        }),
        defineField({
          type: "url",
          name: "primaryLink",
          title: "Button Link",
          description: "Enter the URL this button should link to",
          validation: (rule) =>
            rule.uri({
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
          validation: (rule) => rule.max(20),
        }),
        defineField({
          type: "url",
          name: "secondaryLink",
          title: "Button Link",
          description: "Enter the URL this button should link to",
          validation: (rule) =>
            rule.uri({
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
          validation: (rule) => rule.max(60),
        }),
      ],
    }),
  ],
});
