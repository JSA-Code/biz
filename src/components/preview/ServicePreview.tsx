"use client";

import type { QueryResponseInitial } from "@sanity/react-loader";
import { useQuery } from "@/loader/useQuery";
import type { ServiceType } from "@/types";
import { SERVICE_QUERY } from "@/lib/queries";
import Service from "@/components/modules/Service";

interface ServicePreviewProps {
  initial: QueryResponseInitial<ServiceType | null>;
}

export default function ServicePreview({ initial }: ServicePreviewProps) {
  const { data } = useQuery<ServiceType | null>(SERVICE_QUERY, {}, { initial });

  return data ? (
    <Service data={data} />
  ) : (
    <div className="bg-red-100">No data found</div>
  );
}
