"use client";

import type { QueryResponseInitial } from "@sanity/react-loader";
import { useQuery } from "@/loader/useQuery";
import type { AboutPayloadType } from "@/types";
import { ABOUT_QUERY } from "@/lib/queries";
import About from "./About";

interface AboutPreviewProps {
  initial: QueryResponseInitial<AboutPayloadType | null>;
}

export default function AboutPreview({ initial }: AboutPreviewProps) {
  const { data } = useQuery<AboutPayloadType | null>(
    ABOUT_QUERY,
    {},
    { initial }
  );

  return data ? (
    <About data={data} />
  ) : (
    <div className="bg-red-100">No data found</div>
  );
}
