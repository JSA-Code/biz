"use client";

import { SERVICE_QUERY } from "@/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import Service from "@/components/shared/Service";
import type { SanityDocument } from "next-sanity";

export default function ServicePreview({
  initial,
}: {
  initial: QueryResponseInitial<SanityDocument>;
}) {
  const { data } = useQuery<SanityDocument | null>(
    SERVICE_QUERY,
    {},
    { initial }
  );

  return data ? (
    <Service data={data} />
  ) : (
    <div className="bg-red-100">No data found</div>
  );
}
