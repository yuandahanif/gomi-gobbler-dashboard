/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "safebooru.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
