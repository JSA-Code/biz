"use client";

import type { QueryResponseInitial } from "@sanity/react-loader";
import { useQuery } from "@/loader/useQuery";
import type { ReviewType } from "@/types";
import { REVIEW_QUERY } from "@/lib/queries";
import Review from "@/components/modules/Review";

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
