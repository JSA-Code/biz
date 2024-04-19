import { loadAbout } from "@/loader/loadQuery";
import { draftMode } from "next/headers";
import AboutPreview from "./AboutPreview";
import About from "./About";

export default async function AboutPage() {
  const initial = await loadAbout();

  return (
    <main className="mx-auto max-w-screen-2xl px-10 xl:px-16 mt-6 md:mt-12 space-y-16 md:space-y-20 lg:space-y-24 mb-16 sm:mb-36">
      {draftMode().isEnabled ? (
        <AboutPreview initial={initial} />
      ) : (
        <About data={initial.data} />
      )}
    </main>
  );
}
