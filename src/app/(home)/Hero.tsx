import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10">
        <div className="flex-1">
          <h2 className="text-7xl font-bold text-center md:text-start">
            Lorem ipsum dolor sit amet
          </h2>
          <div className="text-2xl font-semibold my-10 flex flex-row justify-center md:flex-col md:items-start flex-wrap gap-4">
            <Link
              href="/#appointment"
              // TODO should this elem be display: block or inline-block?
              className="bg-green-800 hover:bg-slate-800 text-white rounded-3xl p-4 inline-block"
            >
              Set Appointment
            </Link>
            <Link
              href="/#contact-us"
              // TODO should this elem be display: block or inline-block?
              className="bg-slate-800 hover:bg-green-700 text-white rounded-3xl p-4 inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/professional.jpg"
            alt="Happy business"
            width={1280}
            height={853}
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
