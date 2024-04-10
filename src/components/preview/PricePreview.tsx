"use client";

import { PRICE_QUERY } from "@/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import Price from "@/components/modules/Price";
import type { SanityDocument } from "next-sanity";

export default function PricePreview({
  initial,
}: {
  initial: QueryResponseInitial<SanityDocument>;
}) {
  const { data } = useQuery<SanityDocument | null>(
    PRICE_QUERY,
    {},
    { initial }
  );

  return data ? (
    <Price data={data} />
  ) : (
    <div className="bg-red-100">No data found</div>
  );
}
