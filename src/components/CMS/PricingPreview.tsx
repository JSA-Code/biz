"use client";

import { HOME_QUERY } from "@/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import Pricing from "@/components/Pricing";
import type { SanityDocument } from "next-sanity";

export default function PricingPreview({
  initial,
}: {
  initial: QueryResponseInitial<SanityDocument>;
}) {
  const { data } = useQuery<SanityDocument | null>(HOME_QUERY, {}, { initial });

  return data ? (
    <Pricing data={data} />
  ) : (
    <div className="bg-red-100">No data found</div>
  );
}
