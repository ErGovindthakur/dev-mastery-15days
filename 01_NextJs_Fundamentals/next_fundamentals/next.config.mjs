/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  // 1. images config
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"fakestoreapi.com"
      },
      {
        protocol:"https",
        hostname:"avatars.githubusercontent.com"
      }
    ]
  }

};

export default nextConfig;
