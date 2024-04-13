"use client";

import { CONTACT_QUERY } from "@/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import Contact from "@/components/modules/Contact";
import type { ContactType } from "@/types";

interface ContactPreviewProps {
  initial: QueryResponseInitial<ContactType>;
}

export default function ContactPreview({ initial }: ContactPreviewProps) {
  const { data } = useQuery<ContactType | null>(CONTACT_QUERY, {}, { initial });

  return data ? (
    <Contact data={data} />
  ) : (
    <div className="bg-red-100">No data found</div>
  );
}
