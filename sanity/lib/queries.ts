import { groq } from "next-sanity";

export const HOME_QUERY = groq`*[_type == "home"][0]{
    hero-> {heading, subheading, primaryButton{primaryLabel, primaryLink}, secondaryButton{secondaryLabel, secondaryLink}, image},
    contact-> {heading, subheading, image, primaryButton{primaryLabel, primaryLink}, secondaryButton{secondaryLabel, secondaryLink}},
    office-> {location},
    review-> {reviews[]{heading, name, company, link, image, _key}},
    service-> {heading, subheading, services[]{heading, subheading, icon, _key}},
    price-> {heading, subheading, prices[]{heading, subheading, frequency, buttonLabel, buttonLink, price, featureList[], _key}},
  }`;
export const SUPPORT_QUERY = groq`*[_type == "support"][0]`;
export const HERO_QUERY = groq`*[_type == "hero"][0]{heading, subheading, primaryButton{primaryLabel, primaryLink}, secondaryButton{secondaryLabel, secondaryLink}, image}`;
export const CONTACT_QUERY = groq`*[_type == "contact"][0]{heading, subheading, image, primaryButton{primaryLabel, primaryLink}, secondaryButton{secondaryLabel, secondaryLink}}`;
export const OFFICE_QUERY = groq`*[_type == "office"][0]{location}`;
export const REVIEW_QUERY = groq`*[_type == "review"][0]{reviews[]{heading, name, company, link, image, _key}}`;
export const SERVICE_QUERY = groq`*[_type == "service"][0]{heading, subheading, services[]{heading, subheading, icon, _key}}`;
export const PRICE_QUERY = groq`*[_type == "price"][0]{heading, subheading, prices[]{heading, subheading, frequency, buttonLabel, buttonLink, price, featureList[], _key}}`;
