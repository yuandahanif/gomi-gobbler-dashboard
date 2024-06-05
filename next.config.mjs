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
      {
        protocol: "https",
        hostname: "i.pximg.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
