"use client";

import { OFFICE_QUERY } from "@/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import Office from "@/components/Office";
import type { SanityDocument } from "next-sanity";

export default function OfficePreview({
  initial,
}: {
  initial: QueryResponseInitial<SanityDocument>;
}) {
  const { data } = useQuery<SanityDocument | null>(
    OFFICE_QUERY,
    {},
    { initial }
  );

  return data ? (
    <Office data={data} />
  ) : (
    <div className="bg-red-100">No data found</div>
  );
}
