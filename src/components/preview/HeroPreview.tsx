"use client";

import type { QueryResponseInitial } from "@sanity/react-loader";
import { useQuery } from "@/loader/useQuery";
import type { HeroType } from "@/types";
import { HERO_QUERY } from "@/lib/queries";
import Hero from "@/components/modules/Hero";

interface HeroPreviewProps {
  initial: QueryResponseInitial<HeroType | null>;
}

export default function HeroPreview({ initial }: HeroPreviewProps) {
  const { data } = useQuery<HeroType | null>(HERO_QUERY, {}, { initial });

  return data ? (
    <Hero data={data} />
  ) : (
    <div className="bg-red-100">No data found</div>
  );
}
