import Link from "next/link";

interface NavbarProps {
  //   data: SettingsPayload;
}

export default function Navbar(props: NavbarProps) {
  return (
    <header className="sticky top-0 z-10 gap-x-5 bg-white/80 px-4 py-4 backdrop-blur md:px-16 md:py-5 lg:px-32">
      {/* TODO does the logo go inside the nav element? */}
      <nav>
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-20 h-20"
          >
            <path d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" />
          </svg>
        </Link>
        <ul className="flex justify-around">
          <li>
            <Link
              className="text-lg hover:text-black md:text-xl"
              href="/#appointment"
            >
              Appointments
            </Link>
          </li>
          <li>
            <Link
              className="text-lg hover:text-black md:text-xl"
              href="/#office-location"
            >
              Office
            </Link>
          </li>
          <li>
            <Link
              className="text-lg hover:text-black md:text-xl"
              href="/support"
            >
              Support
            </Link>
          </li>
          <li>
            <Link
              className="text-lg hover:text-black md:text-xl"
              href="/#pricing"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link className="text-lg hover:text-black md:text-xl" href="/">
              Search
            </Link>
          </li>
          <li>
            <Link className="text-lg hover:text-black md:text-xl" href="/">
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
