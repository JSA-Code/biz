import { draftMode } from "next/headers";
import { HOME_QUERY } from "@/lib/queries";
import { loadQuery } from "@/lib/store";
import Appointment from "./Appointment";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Office from "./Office";
import Pricing from "./Pricing";
import Review from "./Review";
import Services from "./Services";
import HeroPreview from "@/components/CMS/HeroPreview";
import ContactPreview from "@/components/CMS/ContactPreview";
import type { SanityDocument } from "next-sanity";

// TODO update entire page to utilize Sanity data
export default async function Home() {
  const initial = await loadQuery<SanityDocument>(
    HOME_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  // console.log("INITIAL:", initial);
  return (
    // TODO should I use max-w-screen-2xl and mx-auto here or on each indiv sections?
    <main className="px-10 xl:px-16 mt-6 md:mt-12 space-y-16 md:space-y-20 lg:space-y-24 mb-16 sm:mb-36 max-w-screen-2xl mx-auto">
      {draftMode().isEnabled ? (
        <>
          <HeroPreview initial={initial} />
          <Appointment />
          <ContactPreview initial={initial} />
          <Office />
          <Review />
          <Services />
          <Pricing />
        </>
      ) : (
        <>
          <Hero data={initial.data} />
          <Appointment />
          <Contact data={initial.data} />
          <Office />
          <Review />
          <Services />
          <Pricing />
        </>
      )}
    </main>
  );
}
