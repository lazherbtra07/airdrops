/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337", // Add this line if your server runs on a specific port
      },
    ],
  },
};

export default nextConfig;
