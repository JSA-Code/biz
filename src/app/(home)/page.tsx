import { draftMode } from "next/headers";
import { HERO_QUERY } from "@/lib/queries";
import { CONTACT_QUERY } from "@/lib/queries";
import { OFFICE_QUERY } from "@/lib/queries";
import { REVIEW_QUERY } from "@/lib/queries";
import { SERVICE_QUERY } from "@/lib/queries";
import { PRICE_QUERY } from "@/lib/queries";
import { loadQuery } from "@/lib/store";
import Appointment from "./Appointment";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Office from "@/components/Office";
import Price from "@/components/Price";
import Review from "@/components/Review";
import Service from "@/components/Service";
import HeroPreview from "@/components/CMS/HeroPreview";
import ContactPreview from "@/components/CMS/ContactPreview";
import ReviewPreview from "@/components/CMS/ReviewPreview";
import OfficePreview from "@/components/CMS/OfficePreview";
import ServicePreview from "@/components/CMS/ServicePreview";
import PricePreview from "@/components/CMS/PricePreview";
import type { SanityDocument } from "next-sanity";

// TODO update entire page to utilize Sanity data
export default async function Home() {
  const hero = await loadQuery<SanityDocument>(
    HERO_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  const contact = await loadQuery<SanityDocument>(
    CONTACT_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  const office = await loadQuery<SanityDocument>(
    OFFICE_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  const review = await loadQuery<SanityDocument>(
    REVIEW_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  const service = await loadQuery<SanityDocument>(
    SERVICE_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  const price = await loadQuery<SanityDocument>(
    PRICE_QUERY,
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
          <HeroPreview initial={hero} />
          <Appointment />
          <ContactPreview initial={contact} />
          <OfficePreview initial={office} />
          <ReviewPreview initial={review} />
          <ServicePreview initial={service} />
          <PricePreview initial={price} />
        </>
      ) : (
        <>
          <Hero data={hero.data[0]} />
          <Appointment />
          <Contact data={contact.data[0]} />
          <Office data={office.data[0]} />
          <Review data={review.data[0]} />
          <Service data={service.data[0]} />
          <Price data={price.data[0]} />
        </>
      )}
    </main>
  );
}
