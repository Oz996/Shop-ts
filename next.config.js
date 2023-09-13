/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.dpj.se",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
