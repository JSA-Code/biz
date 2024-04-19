import { Roboto_Flex } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://localhost:3000"),
  // title.template used to add a prefix or a suffix to titles defined in child route segments, eg. "Support | Business Name"
  title: {
    template: "%s | Business Name",
    default: "Business Name", // a default is required
  },
  openGraph: {
    title: "INSERT OG Title",
    description: "INSERT OG Description",
    images: [
      {
        url: "/opengraph-image.jpg",
        alt: "Description of the image for screen readers",
      },
    ],
  },
};

const roboto = Roboto_Flex({ subsets: ["cyrillic"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
