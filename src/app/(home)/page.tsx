import { loadQuery } from "@/lib/store";
import { HOME_QUERY } from "@/lib/queries";
import { draftMode } from "next/headers";
import HomePreview from "./HomePreview";
import Home from "./Home";
import type { HomePayloadType } from "@/types";

// TODO update entire page to utilize Sanity data
export default async function HomePage() {
  const initial = await loadQuery<HomePayloadType>(
    HOME_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  return (
    // TODO should I use max-w-screen-2xl and mx-auto here or on each indiv sections?
    <main className="mx-auto max-w-screen-2xl px-10 xl:px-16 mt-6 md:mt-12 space-y-16 md:space-y-20 lg:space-y-24 mb-16 sm:mb-36">
      {draftMode().isEnabled ? (
        <HomePreview initial={initial} />
      ) : (
        <Home data={initial.data} />
      )}
    </main>
  );
}
