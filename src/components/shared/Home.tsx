import Appointment from "../../app/(home)/Appointment";
import Contact from "@/components/shared/Contact";
import Hero from "@/components/shared/Hero";
import Office from "@/components/shared/Office";
import Price from "@/components/shared/Price";
import Review from "@/components/shared/Review";
import Service from "@/components/shared/Service";
import type { SanityDocument } from "next-sanity";

export default function Home({ data }: { data: SanityDocument }) {
  const { docList } = data ?? [];
  const docs = docList.reduce((acc: SanityDocument, doc: SanityDocument) => {
    acc[doc._type] = doc;
    return acc;
  }, {});
  const hero = docs.hero;
  const contact = docs.contact;
  const office = docs.office;
  const review = docs.review;
  const service = docs.service;
  const price = docs.price;
  // TODO check if env var GOOGLE_MAPS is present, use safety function such as token.ts
  return (
    <>
      <Hero data={hero} />
      <Appointment />
      <Contact data={contact} />
      <Office data={office} />
      <Review data={review} />
      <Service data={service} />
      <Price data={price} />
    </>
  );
}
