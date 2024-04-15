"use client";

import { SUPPORT_QUERY } from "@/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import Support from "./Support";
import type { SanityDocument } from "next-sanity";

interface SupportPreviewProps {
  initial: QueryResponseInitial<SanityDocument | null>;
}

export default function SupportPreview({ initial }: SupportPreviewProps) {
  const { data } = useQuery<SanityDocument | null>(
    SUPPORT_QUERY,
    {},
    { initial }
  );

  return data ? (
    <Support data={data} />
  ) : (
    <div className="bg-red-100">No data found</div>
  );
}
