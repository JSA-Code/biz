import { SupportPayloadType } from "@/types";

interface SupportProps {
  data: SupportPayloadType | null;
}

export default function Support({ data }: SupportProps) {
  return (
    <section id="support" className="min-h-[60svh] pt-0 lg:pt-10">
      Support
    </section>
  );
}
