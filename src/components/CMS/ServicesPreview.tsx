"use client";

import { HOME_QUERY } from "@/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import Services from "@/components/Services";
import type { SanityDocument } from "next-sanity";

export default function ServicesPreview({
  initial,
}: {
  initial: QueryResponseInitial<SanityDocument>;
}) {
  const { data } = useQuery<SanityDocument | null>(HOME_QUERY, {}, { initial });

  return data ? (
    <Services data={data} />
  ) : (
    <div className="bg-red-100">No data found</div>
  );
}
