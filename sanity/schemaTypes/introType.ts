import { defineField, defineType } from "sanity";
import { TextIcon } from "@sanity/icons";

export default defineType({
  name: "intro",
  title: "Intro",
  type: "document",
  icon: TextIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
  ],
});
