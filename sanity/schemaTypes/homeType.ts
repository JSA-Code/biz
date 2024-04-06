import { defineField, defineType } from "sanity";
import { TextIcon } from "@sanity/icons";

export default defineType({
  name: "home",
  title: "Home",
  type: "document",
  icon: TextIcon,
  fields: [
    defineField({
      name: "headingText",
      title: "Heading Text",
      type: "string",
      description: "Write a short, introductive heading",
    }),
    defineField({
      name: "headingImage",
      title: "Heading Image",
      type: "image",
      description: "Replace image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "contactText",
      title: "Contact Text",
      type: "string",
      description: "Write your contact information",
    }),
    defineField({
      name: "contactImage",
      title: "Contact Image",
      type: "image",
      description: "Replace image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
  ],
});
