"use client";

import { HOME_QUERY } from "@/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import Home from "@/components/modules/Home";
import type { SanityDocument } from "next-sanity";

export default function HomePreview({
  initial,
}: {
  initial: QueryResponseInitial<SanityDocument>;
}) {
  const { data } = useQuery<SanityDocument | null>(HOME_QUERY, {}, { initial });
  // console.log("HOMEPREVIEW DATA", data);
  return data ? (
    <Home data={data} />
  ) : (
    <div className="bg-red-100">No data found</div>
  );
}
