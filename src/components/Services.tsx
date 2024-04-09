import ImageBox from "./ImageBox";
import type { SanityDocument } from "next-sanity";

export default function Services({ data }: { data: SanityDocument }) {
  // TODO refactor item duplication using array of components
  // TODO check if types are correct for SanityDocument
  const {
    heading = "EMPTY HEADING",
    subheading = "EMPTY SUBHEADING",
    services: { serviceList } = [
      {
        heading: "EMPTY HEADING",
        subheading: "EMPTY SUBHEADING",
        icon: null,
        _key: "123",
      },
    ],
  } = data[0];
  // console.log("DATA:", data);
  return (
    <section id="services" className="bg-zinc-900 p-16 py-20 rounded-2xl">
      <div className="max-w-screen-md mb-8 lg:mb-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          {heading}
        </h2>
        <p className="text-gray-500 sm:text-xl dark:text-gray-400">
          {subheading}
        </p>
      </div>
      {/* Parent grid container of services */}
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        {serviceList.map((item: SanityDocument) => (
          <Service service={item} key={item._key} />
        ))}
      </div>
    </section>
  );
}

function Service({
  service: { heading, subheading, icon },
}: {
  service: SanityDocument;
}) {
  return (
    <div>
      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
        <ImageBox
          image={icon}
          classesWrapper="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
        />
      </div>
      <h3 className="mb-2 text-xl font-bold dark:text-white">{heading}</h3>
      <p className="text-gray-500 dark:text-gray-400">{subheading}</p>
    </div>
  );
}
