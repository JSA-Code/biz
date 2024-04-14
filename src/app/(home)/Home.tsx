import Appointment from "@/components/modules/Appointment";
import Contact from "@/components/modules/Contact";
import Hero from "@/components/modules/Hero";
import Office from "@/components/modules/Office";
import Price from "@/components/modules/Price";
import Review from "@/components/modules/Review";
import Service from "@/components/modules/Service";
import type { HomePayloadType } from "@/types";

interface HomeProps {
  data: HomePayloadType;
}

export default function Home({ data }: HomeProps) {
  const documents = data?.documents ?? {};
  const hero = documents.hero ?? {};
  const contact = documents.contact ?? {};
  const office = documents.office ?? {};
  const review = documents.review ?? {};
  const service = documents.service ?? {};
  const price = documents.price ?? {};

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
