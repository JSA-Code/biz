import { loadQuery } from "@/lib/store";
import { HOME_QUERY } from "@/lib/queries";
import { draftMode } from "next/headers";
import HomePreview from "@/components/preview/HomePreview";
import Home from "@/components/modules/Home";
import type { SanityDocument } from "next-sanity";

// TODO update entire page to utilize Sanity data
export default async function Page() {
  const home = await loadQuery<SanityDocument>(
    HOME_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  return (
    // TODO should I use max-w-screen-2xl and mx-auto here or on each indiv sections?
    <main className="px-10 xl:px-16 mt-6 md:mt-12 space-y-16 md:space-y-20 lg:space-y-24 mb-16 sm:mb-36 max-w-screen-2xl mx-auto">
      {draftMode().isEnabled ? (
        <HomePreview initial={home} />
      ) : (
        <Home data={home.data} />
      )}
    </main>
  );
}
