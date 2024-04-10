import { groq } from "next-sanity";

export const HOME_QUERY = groq`*[_type == "home"]{docList[]->}`;
export const HERO_QUERY = groq`*[_type == "hero"]`;
export const CONTACT_QUERY = groq`*[_type == "contact"]`;
export const OFFICE_QUERY = groq`*[_type == "office"]`;
export const REVIEW_QUERY = groq`*[_type == "review"]`;
export const SERVICE_QUERY = groq`*[_type == "service"]`;
export const PRICE_QUERY = groq`*[_type == "price"]`;
