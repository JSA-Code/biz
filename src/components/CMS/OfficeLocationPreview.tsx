"use client";

import { HOME_QUERY } from "@/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import OfficeLocation from "@/components/OfficeLocation";
import type { SanityDocument } from "next-sanity";

export default function OfficeLocationPreview({
  initial,
}: {
  initial: QueryResponseInitial<SanityDocument>;
}) {
  const { data } = useQuery<SanityDocument | null>(HOME_QUERY, {}, { initial });

  return data ? (
    <OfficeLocation data={data} />
  ) : (
    <div className="bg-red-100">No office data found</div>
  );
}
