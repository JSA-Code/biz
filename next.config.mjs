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
    ],
  },
  experimental: {
    taint: true,
  },
};

export default nextConfig;
