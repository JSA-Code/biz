import Script from "next/script";

type Props = {};

export default function Appointment({}: Props) {
  return (
    // TODO prevent scrolling when hover within elem
    <section id="appointment" className="">
      {/* <!-- Calendly inline widget begin --> */}
      <div
        className="calendly-inline-widget min-w-[320px] h-[700px]"
        data-url="https://calendly.com/jsa-finance/book-your-appointment?background_color=1d1f1d&text_color=f2f7f9&primary_color=7dcdff"
      ></div>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </section>
  );
}
