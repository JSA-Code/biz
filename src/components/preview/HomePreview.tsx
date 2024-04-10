"use client";

import { HOME_QUERY } from "@/lib/queries";
import HeroPreview from "@/components/preview/HeroPreview";
import Appointment from "../../app/(home)/Appointment";
import ContactPreview from "@/components/preview/ContactPreview";
import ReviewPreview from "@/components/preview/ReviewPreview";
import OfficePreview from "@/components/preview/OfficePreview";
import ServicePreview from "@/components/preview/ServicePreview";
import PricePreview from "@/components/preview/PricePreview";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import type { SanityDocument } from "next-sanity";

export default function HomePreview({
  initial,
}: {
  initial: QueryResponseInitial<SanityDocument>;
}) {
  const { data } = useQuery<SanityDocument | null>(HOME_QUERY, {}, { initial });
  // console.log("DATA:", data);
  return data ? (
    <>
      <HeroPreview initial={data[0]} />
      <Appointment />
      <ContactPreview initial={data[0]} />
      <OfficePreview initial={data[0]} />
      <ReviewPreview initial={data[0]} />
      <ServicePreview initial={data[0]} />
      <PricePreview initial={data[0]} />
    </>
  ) : (
    <div className="bg-red-100">No data found</div>
  );
}
