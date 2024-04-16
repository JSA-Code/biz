"use client";

import type { QueryResponseInitial } from "@sanity/react-loader";
import { useQuery } from "@/loader/useQuery";
import type { HomePayloadType } from "@/types";
import { HOME_QUERY } from "@/lib/queries";
import Home from "@/app/(home)/Home";

interface HomePreviewProps {
  initial: QueryResponseInitial<HomePayloadType | null>;
}

export default function HomePreview({ initial }: HomePreviewProps) {
  // TODO why does the website template uses const {data, encodeDataAttribute}?
  const { data } = useQuery<HomePayloadType | null>(
    HOME_QUERY,
    {},
    { initial }
  );
  return data ? (
    <Home data={data} />
  ) : (
    <div className="bg-red-100">No data found</div>
  );
}
