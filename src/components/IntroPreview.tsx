"use client";

import { INTRO_QUERY } from "@/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import Intro from "@/components/Intro";
import type { SanityDocument } from "next-sanity";

export default function IntroPreview({
  initial,
}: {
  initial: QueryResponseInitial<SanityDocument>;
}) {
  const { data } = useQuery<SanityDocument | null>(
    INTRO_QUERY,
    {},
    { initial }
  );

  return data ? (
    <Intro intro={data} />
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}
