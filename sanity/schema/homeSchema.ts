import { defineField, defineType } from "sanity";
import { HomeIcon } from "@sanity/icons";

export default defineType({
  type: "document",
  name: "home",
  title: "Home",
  icon: HomeIcon,
  fields: [
    defineField({
      type: "reference",
      name: "hero",
      title: "Hero",
      to: [{ type: "hero" }],
    }),
    defineField({
      type: "reference",
      name: "contact",
      title: "Contact",
      to: [{ type: "contact" }],
    }),
    defineField({
      type: "reference",
      name: "office",
      title: "Office",
      to: [{ type: "office" }],
    }),
    defineField({
      type: "reference",
      name: "review",
      title: "Review",
      to: [{ type: "review" }],
    }),
    defineField({
      type: "reference",
      name: "service",
      title: "Service",
      to: [{ type: "service" }],
    }),
    defineField({
      type: "reference",
      name: "price",
      title: "Price",
      to: [{ type: "price" }],
    }),
  ],
});
