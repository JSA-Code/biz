import { AboutPayloadType } from "@/types";

interface AboutProps {
  data: AboutPayloadType | null;
}

export default function About({ data }: AboutProps) {
  return (
    <section id="about-us" className="min-h-[60svh] pt-0 lg:pt-10">
      About
    </section>
  );
}
