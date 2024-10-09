/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_INTERNAL_API_URL: process.env.NEXT_PUBLIC_INTERNAL_API_URL,
    NEXT_PUBLIC_SOCKET_API_URL: process.env.NEXT_PUBLIC_SOCKET_API_URL,
  },
};

module.exports = nextConfig;
