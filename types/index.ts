import type { Image } from "sanity";

// TODO Home / Support page should be called _Payload, they act like containers

export type HomePayloadType = {
  documents?: HomePayloadItemType[];
};

export type HomePayloadItemType =
  | HeroType
  | ContactType
  | OfficeType
  | ReviewType
  | ServiceType
  | PriceType;

export interface HeroType {
  _type: "hero";
  heading?: string;
  subheading?: string;
  primaryButton?: { label?: string; link?: string };
  secondaryButton?: { label?: string; link?: string };
  image?: Image;
}

export interface ContactType {
  _type: "contact";
  heading?: string;
  subheading?: string;
  image?: Image;
  primaryButton?: { label?: string; link?: string };
  secondaryButton?: { label?: string; link?: string };
}

export interface OfficeType {
  _type: "office";
  location?: string;
}

export interface ReviewType {
  _type: "review";
  reviews?: ReviewItemType[];
}

export interface ReviewItemType {
  heading?: string;
  name?: string;
  company?: string;
  link?: string;
  image?: Image;
  _key?: string;
}

export interface ServiceType {
  _type: "service";
  heading?: string;
  subheading?: string;
  services?: ServiceItemType[];
}

export interface ServiceItemType {
  heading?: string;
  subheading?: string;
  icon?: Image;
  _key?: string;
}

export interface PriceType {
  _type: "price";
  heading?: string;
  subheading?: string;
  prices?: PriceItemType[];
}

export interface PriceItemType {
  heading?: string;
  subheading?: string;
  frequency?: string;
  button?: string;
  price?: string;
  featureList?: string[];
  _key?: string;
}
