"use client";

import { HOME_QUERY } from "@/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import Review from "@/components/Review";
import type { SanityDocument } from "next-sanity";

export default function ReviewPreview({
  initial,
}: {
  initial: QueryResponseInitial<SanityDocument>;
}) {
  const { data } = useQuery<SanityDocument | null>(HOME_QUERY, {}, { initial });

  return data ? (
    <Review data={data} />
  ) : (
    <div className="bg-red-100">No review data found</div>
  );
}
