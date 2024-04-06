"use client";

import { HOME_QUERY } from "@/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import Hero from "@/components/Hero";
import type { SanityDocument } from "next-sanity";

export default function HeroPreview({
  initial,
}: {
  initial: QueryResponseInitial<SanityDocument>;
}) {
  const { data } = useQuery<SanityDocument | null>(HOME_QUERY, {}, { initial });

  return data ? (
    <Hero data={data} />
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}
