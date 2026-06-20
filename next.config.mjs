/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   allowedDevOrigins: ['192.168.0.102'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.magnific.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
