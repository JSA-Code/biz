import { GoogleMapsEmbed } from "@next/third-parties/google";
import type { OfficeType } from "@/types";

interface OfficeProps {
  data: OfficeType;
}

export default function Office({ data }: OfficeProps) {
  const location = data?.location ?? "Disneyland,Anaheim,CA";
  // TODO check if env var GOOGLE_MAPS is present, use safety function such as token.ts?
  return (
    <section id="office-location">
      {/* TODO fix env var, keep getting error that it's missing */}
      <GoogleMapsEmbed
        apiKey={process.env.GOOGLE_MAPS ?? ""}
        height={350}
        width="100%"
        mode="place"
        q={location}
      />
    </section>
  );
}
