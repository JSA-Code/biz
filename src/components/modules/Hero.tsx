import Link from "next/link";
import ImageBox from "./ImageBox";
import type { HeroType } from "@/types";

interface HeroProps {
  data: HeroType;
}

export default function Hero({ data }: HeroProps) {
  // TODO learn when to use default values in obj/arr destructure and in func params? PROB SOLN, use def val when non obj/arr or when obj/arr can be further destr
  // primaryButton = { label: "BUTTON1", link: "https://example.com" } vs href={primaryButton.link ?? "https://example.com"}
  const {
    heading = "HEADING",
    subheading = "SUBHEADING",
    primaryButton = {},
    secondaryButton = {},
    image = undefined,
  } = data ?? {};
  // console.log("HERO DATA:", data);
  return (
    // min-h-screen is min-height: 100vh; which means min 100% of viewport height, ensures user needs to scroll down first
    // TODO how does this work? 80svh will assume the ui top bar on phone is always present thus adjusts height accordingly
    <section id="hero" className="min-h-[60svh] pt-0 lg:pt-10">
      {/* TODO update min-h-[x] or margin */}
      <div className="flex flex-col lg:flex-row items-center gap-x-14 gap-y-10">
        <div className="flex-1">
          {/* TODO bottom div might need change? Is mx-auto necessary? */}
          <div className="text-lg text-center text-balance font-semibold space-y-6">
            <div className="max-w-lg sm:max-w-2xl space-y-6">
              <h2 className="text-5xl 2xl:text-7xl font-bold lg:text-start">
                {heading}
              </h2>
              <h3 className="lg:text-start font-medium">{subheading}</h3>
            </div>
            <div className="flex flex-col lg:items-start gap-5 max-w-sm md:max-w-xl mx-auto lg:mx-0">
              <Link
                href={primaryButton.link ?? "https://example.com"}
                // TODO should these two elems be display: block or inline-block?
                className="bg-green-800 hover:bg-slate-800 md:text-xl text-white rounded-3xl p-3 md:p-4 inline-block"
              >
                {primaryButton.label ?? "BUTTON1"}
              </Link>
              <Link
                href={secondaryButton.link ?? "https://example.com"}
                className="bg-slate-800 hover:bg-green-700 md:text-xl text-white rounded-3xl p-3 md:p-4 inline-block"
              >
                {secondaryButton.label ?? "BUTTON2"}
              </Link>
            </div>
          </div>
        </div>
        <ImageBox
          image={image}
          classesWrapper="flex-1 mx-auto h-56 sm:h-72 lg:h-full rounded-md shadow-slate-900/50 shadow-xl"
          sizes="(min-width: 780px) calc(48.92vw - 60px), calc(100vw - 80px)"
        />
      </div>
    </section>
  );
}
