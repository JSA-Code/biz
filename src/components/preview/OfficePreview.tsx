"use client";

import type { QueryResponseInitial } from "@sanity/react-loader";
import { useQuery } from "@/loader/useQuery";
import type { OfficeType } from "@/types";
import { OFFICE_QUERY } from "@/lib/queries";
import Office from "@/components/modules/Office";

interface OfficePreviewProps {
  initial: QueryResponseInitial<OfficeType | null>;
}

export default function OfficePreview({ initial }: OfficePreviewProps) {
  const { data } = useQuery<OfficeType | null>(OFFICE_QUERY, {}, { initial });

  return data ? (
    <Office data={data} />
  ) : (
    <div className="bg-red-100">No data found</div>
  );
}
