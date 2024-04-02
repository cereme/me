const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? "https://cereme.dev/" : undefined,
};

export default nextConfig;
