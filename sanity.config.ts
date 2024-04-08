/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.tsx` route
 */
import { defineConfig } from "sanity";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { presentationTool } from "sanity/presentation";
import { locate } from "@/presentation/locate";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    presentationTool({
      locate,
      previewUrl: { previewMode: { enable: "/api/draft" } },
    }),
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
