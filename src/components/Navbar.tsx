import Link from "next/link";

interface NavbarProps {
  //   data: SettingsPayload;
}

export default function Navbar(props: NavbarProps) {
  return (
    <div className="sticky top-0 z-10 flex flex-wrap items-center gap-x-5 bg-white/80 px-4 py-4 backdrop-blur md:px-16 md:py-5 lg:px-32">
      <Link className="text-lg hover:text-black md:text-xl" href="/">
        Home
      </Link>
    </div>
  );
}
