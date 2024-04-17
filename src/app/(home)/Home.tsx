import Appointment from "./Appointment";
import Contact from "@/components/modules/Contact";
import Hero from "@/components/modules/Hero";
import Office from "@/components/modules/Office";
import Price from "@/components/modules/Price";
import Review from "@/components/modules/Review";
import Service from "@/components/modules/Service";
import type { HomePayloadType } from "@/types";

interface HomeProps {
  data: HomePayloadType | null;
}

export default function Home({ data }: HomeProps) {
  const hero = data?.hero ?? {};
  const contact = data?.contact ?? {};
  const office = data?.office ?? {};
  const review = data?.review ?? {};
  const service = data?.service ?? {};
  const price = data?.price ?? {};

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
