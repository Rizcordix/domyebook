/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    // Serve modern formats automatically (from any source image).
    formats: ['image/avif', 'image/webp'],
    // Replaces the deprecated `images.domains`.
    remotePatterns: [
      { protocol: 'https', hostname: 'www.domyebook.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;
