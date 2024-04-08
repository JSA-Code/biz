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
      name: "subheadingText",
      title: "Subheading Text",
      type: "string",
      description: "Write a short, introductive subheading",
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
    defineField({
      name: "officeLocation",
      title: "Office Location",
      type: "string",
      description: "Set the office location",
    }),
    defineField({
      name: "reviewText",
      title: "Review Text",
      type: "string",
      description: "Write the testimonials written by customers",
    }),
    defineField({
      name: "reviewName",
      title: "Review Name",
      type: "string",
      description: "Write the name of the customer",
    }),
    defineField({
      name: "reviewJob",
      title: "Review Job",
      type: "string",
      description: "Write the customer's job",
    }),
  ],
});
