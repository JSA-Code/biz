import type { Image } from "sanity";

export interface HomePayloadType {
  documents?: {
    hero?: HeroType;
    contact?: ContactType;
    office?: OfficeType;
    review?: ReviewType;
    service?: ServiceType;
    price?: PriceType;
  };
}

export interface SupportPayloadType {
  documents?: {};
}

export interface HeroType {
  heading?: string;
  subheading?: string;
  primaryButton?: { primaryLabel?: string; primaryLink?: string };
  secondaryButton?: { secondaryLabel?: string; secondaryLink?: string };
  image?: Image;
}

export interface ContactType {
  heading?: string;
  subheading?: string;
  image?: Image;
  primaryButton?: { primaryLabel?: string; primaryLink?: string };
  secondaryButton?: { secondaryLabel?: string; secondaryLink?: string };
}

export interface OfficeType {
  location?: string;
}

export interface ReviewType {
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
  heading?: string;
  subheading?: string;
  prices?: PriceItemType[];
}

export interface PriceItemType {
  heading?: string;
  subheading?: string;
  frequency?: string;
  buttonLabel?: string;
  buttonLink?: string;
  price?: string;
  featureList?: string[];
  _key?: string;
}
