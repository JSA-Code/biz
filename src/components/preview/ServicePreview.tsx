"use client";

import { SERVICE_QUERY } from "@/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import Service from "@/components/modules/Service";
import type { ServiceType } from "@/types";

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
