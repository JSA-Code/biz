import { GoogleMapsEmbed } from "@next/third-parties/google";
import type { SanityDocument } from "next-sanity";

export default function Office({ data }: { data: SanityDocument }) {
  const { location = "Disneyland,Anaheim,CA" } = data ?? {};
  // TODO check if env var GOOGLE_MAPS is present, use safety function such as token.ts
  return (
    <section id="office-location">
      {/* TODO fix env var, keep getting error that it's missing */}
      <GoogleMapsEmbed
        apiKey={process.env.GOOGLE_MAPS || ""}
        height={350}
        width="100%"
        mode="place"
        q={location}
      />
    </section>
  );
}
