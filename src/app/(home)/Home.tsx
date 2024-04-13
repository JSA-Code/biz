import Appointment from "./Appointment";
import Contact from "@/components/modules/Contact";
import Hero from "@/components/modules/Hero";
import Office from "@/components/modules/Office";
import Price from "@/components/modules/Price";
import Review from "@/components/modules/Review";
import Service from "@/components/modules/Service";
import type {
  HomePayloadType,
  HomePayloadItemType,
  HeroType,
  ContactType,
  OfficeType,
  ReviewType,
  ServiceType,
  PriceType,
} from "@/types";

interface HomeProps {
  data: HomePayloadType;
}

export default function Home({ data }: HomeProps) {
  // TODO fix default values
  const { documents } = data ?? {};
  const docs = (documents || []).reduce(
    (acc: { [key: string]: HomePayloadItemType }, doc: HomePayloadItemType) => {
      acc[doc?._type] = doc;
      return acc;
    },
    {}
  );
  // console.log("DOCS", docs);
  return (
    <>
      <Hero data={docs.hero as HeroType} />
      <Appointment />
      <Contact data={docs.contact as ContactType} />
      <Office data={docs.office as OfficeType} />
      <Review data={docs.review as ReviewType} />
      <Service data={docs.service as ServiceType} />
      <Price data={docs.price as PriceType} />
    </>
  );
}
