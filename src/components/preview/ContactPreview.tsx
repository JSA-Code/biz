"use client";

import { CONTACT_QUERY } from "@/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import Contact from "@/components/shared/Contact";
import type { SanityDocument } from "next-sanity";

export default function ContactPreview({
  initial,
}: {
  initial: QueryResponseInitial<SanityDocument>;
}) {
  const { data } = useQuery<SanityDocument | null>(
    CONTACT_QUERY,
    {},
    { initial }
  );

  return data ? (
    <Contact data={data} />
  ) : (
    <div className="bg-red-100">No data found</div>
  );
}
