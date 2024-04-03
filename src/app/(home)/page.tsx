import Appointment from "./Appointment";
import Contact from "./Contact";
import Hero from "./Hero";
import Office from "./Office";
import Pricing from "./Pricing";
import Review from "./Review";
import Services from "./Services";

// TODO update entire page to utilize Sanity data
export default function Home() {
  return (
    <main className="px-10 xl:px-16 mt-6 md:mt-12 space-y-16 md:space-y-20 lg:space-y-24 mb-16 sm:mb-20">
      <Hero />
      <Appointment />
      <Contact />
      <Office />
      <Services />
      <Review />
      <Pricing />
    </main>
  );
}
