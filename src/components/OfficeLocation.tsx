import { GoogleMapsEmbed } from "@next/third-parties/google";
import { SanityDocument } from "next-sanity";

export default function OfficeLocation({ data }: { data: SanityDocument }) {
  const { officeLocation } = data[0];
  // TODO check if env var GOOGLE_MAPS is present, use safety function such as token.ts
  return (
    <section id="office-location">
      {/* TODO fix env var, keep getting error that it's missing */}
      <GoogleMapsEmbed
        apiKey={process.env.GOOGLE_MAPS || ""}
        height={350}
        width="100%"
        mode="place"
        q={officeLocation || "Disneyland,Anaheim,CA"}
      />
    </section>
  );
}
