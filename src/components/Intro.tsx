import type { SanityDocument } from "next-sanity";

export default function Intro({ intro }: { intro: SanityDocument }) {
  //   console.log("INTRO:", intro);
  return (
    <h2 className="text-5xl md:text-6xl 2xl:text-7xl font-bold text-center md:text-start text-balance">
      {intro?.length ? intro[0].name : "Empty Intro"}
    </h2>
  );
}
