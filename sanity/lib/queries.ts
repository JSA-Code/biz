import { groq } from "next-sanity";

// TODO update queries
export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`;
export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;
