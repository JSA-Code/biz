import Appointment from "../../app/(home)/Appointment";
import Contact from "@/components/modules/Contact";
import Hero from "@/components/modules/Hero";
import Office from "@/components/modules/Office";
import Price from "@/components/modules/Price";
import Review from "@/components/modules/Review";
import Service from "@/components/modules/Service";
import type { SanityDocument } from "next-sanity";

export default function Home({ data }: { data: SanityDocument }) {
  // TODO fix default values
  const { docList } = data ?? {};
  // console.log("DATA", data);
  // console.log("DOCLIST", docList);
  const docs = (docList || []).reduce(
    (acc: SanityDocument, doc: SanityDocument) => {
      acc[doc?._type] = doc;
      return acc;
    },
    {}
  );
  const { hero } = docs;
  const { contact } = docs;
  const { office } = docs;
  const { review } = docs;
  const { service } = docs;
  const { price } = docs;
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
