"use client";

import type { QueryResponseInitial } from "@sanity/react-loader";
import { useQuery } from "@/loader/useQuery";
import type { ContactType } from "@/types";
import { CONTACT_QUERY } from "@/lib/queries";
import Contact from "@/components/modules/Contact";

interface ContactPreviewProps {
  initial: QueryResponseInitial<ContactType | null>;
}

export default function ContactPreview({ initial }: ContactPreviewProps) {
  const { data } = useQuery<ContactType | null>(CONTACT_QUERY, {}, { initial });

  return data ? (
    <Contact data={data} />
  ) : (
    <div className="bg-red-100">No data found</div>
  );
}
