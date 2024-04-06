import Image from "next/image";
import Link from "next/link";
import professional from "../../public/professional.jpg";
import ImageBox from "./ImageBox";
import type { SanityDocument } from "next-sanity";

export default function Hero({ data }: { data: SanityDocument }) {
  // console.log("HERO DATA:", data);
  return (
    // min-h-screen is min-height: 100vh; which means min 100% of viewport height, ensures user needs to scroll down first
    <section id="hero" className="min-h-[50vh] mb-20 sm:mb-0">
      {/* TODO update min-h-[x] or margin */}
      <div className="flex flex-col md:flex-row items-center gap-x-14 gap-y-10">
        <div className="flex-1 mb-5 md:mb-0">
          {/* TODO bottom div might need change? Is mx-auto necessary? */}
          <div className="mx-auto flex justify-center md:flex-col md:items-start flex-wrap gap-5 max-w-xl text-base md:text-xl font-semibold">
            <h2 className="text-5xl md:text-6xl 2xl:text-7xl font-bold text-center md:text-start text-balance">
              {data[0]?.headingText || "Empty Heading"}
            </h2>
            <Link
              href="/#appointment"
              // TODO should these two elems be display: block or inline-block?
              className="bg-green-800 hover:bg-slate-800 text-white rounded-3xl p-3 md:p-4 inline-block"
            >
              Set Appointment
            </Link>
            <Link
              href="/#contact-us"
              className="bg-slate-800 hover:bg-green-700 text-white rounded-3xl p-3 md:p-4 inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
        {/* <div className="flex-1">
          <Image
            className="mx-auto w-auto h-56 sm:h-72 lg:h-96 object-cover object-center rounded-md shadow-slate-900/50 shadow-xl"
            src={professional}
            // src={home?.image ? home[0].image : professional}
            alt="Happy business workers smiling"
            placeholder="blur"
            // local imported images do not req w/h, blur data automatically gen
            // prevents images smaller than _vw to be generated for _px width
            // TODO update sizes attr
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            sizes="(min-width: 1600px) 576px, (min-width: 1300px) calc(15vw + 339px), (min-width: 780px) calc(50vw - 68px), (min-width: 660px) 432px, (min-width: 460px) 336px, calc(94.29vw - 79px)"
          />
        </div> */}
      </div>
      <div className="flex-1">
        <ImageBox image={data[0]?.headingImage} />
      </div>
    </section>
  );
}
