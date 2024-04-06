/** @type {import('next').NextConfig} */
const nextConfig = {
  // enable static export after running "next build" in "out" folder
  // output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "tailwindui.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "flowbite.s3.amazonaws.com",
      },
    ],
  },
  experimental: {
    taint: true,
  },
};

export default nextConfig;
