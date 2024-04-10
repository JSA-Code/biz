"use client";

import { REVIEW_QUERY } from "@/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import Review from "@/components/shared/Review";
import type { SanityDocument } from "next-sanity";

export default function ReviewPreview({
  initial,
}: {
  initial: QueryResponseInitial<SanityDocument>;
}) {
  const { data } = useQuery<SanityDocument | null>(
    REVIEW_QUERY,
    {},
    { initial }
  );

  return data ? (
    <Review data={data} />
  ) : (
    <div className="bg-red-100">No data found</div>
  );
}
