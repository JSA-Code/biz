"use client";

import { REVIEW_QUERY } from "@/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import Review from "@/components/modules/Review";
import type { ReviewType } from "@/types";

interface ReviewPreviewProps {
  initial: QueryResponseInitial<ReviewType | null>;
}

export default function ReviewPreview({ initial }: ReviewPreviewProps) {
  const { data } = useQuery<ReviewType | null>(REVIEW_QUERY, {}, { initial });

  return data ? (
    <Review data={data} />
  ) : (
    <div className="bg-red-100">No data found</div>
  );
}
