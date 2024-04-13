import { groq } from "next-sanity";

export const HOME_QUERY = groq`*[_type == "home"][0]{documents[]->}`;
export const SUPPORT_QUERY = groq`*[_type == "support"][0]`;
export const HERO_QUERY = groq`*[_type == "hero"][0]{heading, subheading, primaryButton{label, link}, secondaryButton{label, link}, image}`;
export const CONTACT_QUERY = groq`*[_type == "contact"][0]{heading, subheading, image, primaryButton{label, link}, secondaryButton{label, link}}`;
export const OFFICE_QUERY = groq`*[_type == "office"][0]{location}`;
export const REVIEW_QUERY = groq`*[_type == "review"][0]{reviews[]{heading, name, company, link, image, _key}}`;
export const SERVICE_QUERY = groq`*[_type == "service"][0]{heading, subheading, services[]{heading, subheading, icon, _key}}`;
export const PRICE_QUERY = groq`*[_type == "price"][0]{heading, subheading, prices[]{heading, subheading, frequency, button, price, featureList[], _key}}`;
