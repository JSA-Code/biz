"use client";

import { PRICE_QUERY } from "@/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import Price from "@/components/modules/Price";
import type { PriceType } from "@/types";

interface PricePreviewProps {
  initial: QueryResponseInitial<PriceType>;
}

export default function PricePreview({ initial }: PricePreviewProps) {
  const { data } = useQuery<PriceType | null>(PRICE_QUERY, {}, { initial });

  return data ? (
    <Price data={data} />
  ) : (
    <div className="bg-red-100">No data found</div>
  );
}
