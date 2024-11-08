import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', "static.wixstatic.com", "randomuser.me", "api.uifaces.co", "images.unsplash.com", "source.unsplash.com", "i.pravatar.cc", "i0.wp.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
