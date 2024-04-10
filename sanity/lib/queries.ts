import { groq } from "next-sanity";

export const HOME_QUERY = groq`*[_type == "home"][0]{docList[]->}`;
export const HERO_QUERY = groq`*[_type == "hero"][0]`;
export const CONTACT_QUERY = groq`*[_type == "contact"][0]`;
export const OFFICE_QUERY = groq`*[_type == "office"][0]`;
export const REVIEW_QUERY = groq`*[_type == "review"][0]`;
export const SERVICE_QUERY = groq`*[_type == "service"][0]`;
export const PRICE_QUERY = groq`*[_type == "price"][0]`;
