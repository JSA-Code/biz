import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section>
      <h2>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, ex?
      </h2>
      <div className="flex">
        <Link
          href="/#appointment"
          // TODO should this elem be display: block or inline-block?
          className="bg-green-800 rounded-lg p-2 inline-block hover:bg-green-700"
        >
          Set Appointment
        </Link>
        <Link
          href="/#contact-us"
          // TODO should this elem be display: block or inline-block?
          className="bg-green-800 rounded-lg p-2 inline-block hover:bg-green-700"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
