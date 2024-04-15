import { createClient } from "next-sanity";
import {
  apiVersion,
  dataset,
  projectId,
  revalidateSecret,
  studioUrl,
} from "@/lib/api";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: revalidateSecret ? false : true,
  stega: {
    studioUrl,
    // logger: console,
  },
});
