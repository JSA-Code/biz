"use client";

import { HOME_QUERY } from "@/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import Home from "@/app/(home)/Home";
import type { HomePayloadType } from "@/types";

interface HomePreviewProps {
  initial: QueryResponseInitial<HomePayloadType | null>;
}

export default function HomePreview({ initial }: HomePreviewProps) {
  const { data } = useQuery<HomePayloadType | null>(
    HOME_QUERY,
    {},
    { initial }
  );
  // console.log("HOMEPREVIEW DATA", data);
  return data ? (
    <Home data={data} />
  ) : (
    <div className="bg-red-100">No data found</div>
  );
}
