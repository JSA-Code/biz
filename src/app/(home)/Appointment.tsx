import Script from "next/script";

type Props = {};

export default function Appointment({}: Props) {
  return (
    // TODO prevent scrolling when hover within elem
    <section id="appointment">
      {/* <!-- Calendly inline widget begin --> */}
      {/* TODO fix height issue, takes extra space if not set correctly */}
      <div
        className="calendly-inline-widget h-[1100px] sm:h-[1100px] xl:h-[660px]"
        data-url="https://calendly.com/jsa-app/book-your-appointment?background_color=1d1f1d&text_color=f2f7f9&primary_color=7dcdff"
      ></div>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </section>
  );
}
