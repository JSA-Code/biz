"use client";

import { SUPPORT_QUERY } from "@/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import type { SupportPayloadType } from "@/types";
import Support from "./Support";

interface SupportPreviewProps {
  initial: QueryResponseInitial<SupportPayloadType | null>;
}

export default function SupportPreview({ initial }: SupportPreviewProps) {
  const { data } = useQuery<SupportPayloadType | null>(
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
