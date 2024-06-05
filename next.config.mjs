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
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
