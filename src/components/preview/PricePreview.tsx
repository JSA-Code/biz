"use client";

import type { QueryResponseInitial } from "@sanity/react-loader";
import { useQuery } from "@/loader/useQuery";
import type { PriceType } from "@/types";
import { PRICE_QUERY } from "@/lib/queries";
import Price from "@/components/modules/Price";

interface PricePreviewProps {
  initial: QueryResponseInitial<PriceType | null>;
}

export default function PricePreview({ initial }: PricePreviewProps) {
  const { data } = useQuery<PriceType | null>(PRICE_QUERY, {}, { initial });

  return data ? (
    <Price data={data} />
  ) : (
    <div className="bg-red-100">No data found</div>
  );
}
