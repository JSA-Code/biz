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
    <main className="min-h-screen p-12 md:p-32 border-red-500 border-2">
      <h2>MAIN CONTENT FOR HOME</h2>
      <Hero />
      <Appointment />
      <Contact />
      <Office />
      <Pricing />
      <Services />
      <Review />
    </main>
  );
}
