"use client";

import { HOME_QUERY } from "@/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import Contact from "@/components/Contact";
import type { SanityDocument } from "next-sanity";

export default function ContactPreview({
  initial,
}: {
  initial: QueryResponseInitial<SanityDocument>;
}) {
  const { data } = useQuery<SanityDocument | null>(HOME_QUERY, {}, { initial });

  return data ? (
    <Contact data={data} />
  ) : (
    <div className="bg-red-100">No contact data found</div>
  );
}
