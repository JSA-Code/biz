import Link from "next/link";
import ImageBox from "./ImageBox";
import type { ReviewType, ReviewItemType } from "@/types";

interface ReviewProps {
  data: ReviewType;
}

export default function Review({ data }: ReviewProps) {
  const {
    reviews = [
      {
        heading: "HEADING",
        name: "NAME",
        company: "COMPANY",
        link: "https://example.com",
        image: undefined,
        _key: "123",
      },
    ],
  } = data ?? {};
  return (
    // TODO why do we need 2 mx-auto in the next two lines?
    <section id="customer-review" className="max-w-screen-xl mx-auto">
      {reviews.map((item: ReviewItemType) => (
        <ReviewComp item={item} key={item._key} />
      ))}
    </section>
  );
}

interface ReviewCompProps {
  item: ReviewItemType;
}

function ReviewComp({
  item: {
    heading = "HEADING",
    name = "NAME",
    company = "COMPANY",
    link = "https://example.com",
    image = undefined,
  },
}: ReviewCompProps) {
  return (
    <figure className="max-w-screen-md mx-auto text-center">
      <svg
        className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
        viewBox="0 0 24 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
          fill="currentColor"
        />
      </svg>
      <blockquote>
        <p className="text-2xl font-medium text-gray-900 dark:text-white">
          &quot;{heading}&quot;
        </p>
      </blockquote>
      <figcaption className="flex items-center justify-center mt-6 space-x-3">
        <Link href={link} className="flex items-center">
          <ImageBox image={image} classesWrapper="w-6 h-6 rounded-full mr-3" />
          <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <div className="pr-3 font-medium text-gray-900 dark:text-white">
              {name}
            </div>
            <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
              {company}
            </div>
          </div>
        </Link>
      </figcaption>
    </figure>
  );
}
