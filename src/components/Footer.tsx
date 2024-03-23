import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="flex justify-around">
      <section>
        <h2>Tax Services</h2>
        <Link href="/#services">
          <p>W2 employee</p>
        </Link>
        <Link href="/#services">
          <p>Self-Employed</p>
        </Link>
        <Link href="/#services">
          <p>Small Business</p>
        </Link>
        <Link href="/#pricing">
          <p>Pricing</p>
        </Link>
      </section>
      <section>
        <h2>Support</h2>
        <p>
          <Link href="/#contact-us">Contact Us</Link>
        </p>
        <p>
          <Link href="/refund">Where&apos;s my refund?</Link>
        </p>
        <p>
          <Link href="/#office-location">Office location</Link>
        </p>
      </section>
      <section>
        <h2>Customer Review</h2>
        <p>
          <Link href="/testimonals">Testimonals</Link>
        </p>
      </section>
      <section>
        <h2>About</h2>
        <Link href="/about-us">
          <p>About us</p>
        </Link>
      </section>
    </footer>
  );
}
