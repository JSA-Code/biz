import { groq } from "next-sanity";

// TODO update queries
export const INTRO_QUERY = groq`*[_type == "intro"]`;
