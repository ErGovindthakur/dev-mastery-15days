/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  // 1. images config
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"fakestoreapi.com"
      }
    ]
  }

};

export default nextConfig;
