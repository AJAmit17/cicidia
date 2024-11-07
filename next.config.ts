import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  remotePatterns: [
    {
      protocol: "https",
      hostname: "i.pravatar.cc",
    },
    {
      protocol: "https",
      hostname: "images.unsplash.com",
    },
    {
      protocol: "https",
      hostname: "github.com",
    },
  ],
  images: {
    domains: ['avatars.githubusercontent.com',"static.wixstatic.com","randomuser.me","api.uifaces.co","images.unsplash.com"],
  },
};

export default nextConfig;
