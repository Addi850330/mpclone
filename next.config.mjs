/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "https://mp-trav.vercel.app",
    // API_URL: "http://localhost:3000",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dfnltynzq/**",
      },
    ],
  },
};

export default nextConfig;
