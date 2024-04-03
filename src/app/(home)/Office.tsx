import { GoogleMapsEmbed } from "@next/third-parties/google";

type Props = {};

export default function Office({}: Props) {
  // TODO check if env var is present
  return (
    <section id="office" className="max-w-screen-2xl mx-auto">
      <GoogleMapsEmbed
        apiKey={process.env.GOOGLE_MAPS_API || ""}
        height={350}
        width="100%"
        mode="place"
        q="Disneyland,Anaheim,CA"
      />
    </section>
  );
}
