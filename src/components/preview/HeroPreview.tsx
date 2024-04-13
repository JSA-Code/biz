"use client";

import { HERO_QUERY } from "@/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import Hero from "@/components/modules/Hero";
import type { HeroType } from "@/types";

interface HeroPreviewProps {
  initial: QueryResponseInitial<HeroType>;
}

export default function HeroPreview({ initial }: HeroPreviewProps) {
  const { data } = useQuery<HeroType | null>(HERO_QUERY, {}, { initial });
  // console.log("DATA", data);

  return data ? (
    <Hero data={data} />
  ) : (
    <div className="bg-red-100">No data found</div>
  );
}
