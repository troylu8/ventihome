import type { NextConfig } from "next";

const nextConfig: NextConfig = {

    images: {
        remotePatterns: [ //TODO: remove
            {
              protocol: 'https',
              hostname: 'picsum.photos',
              port: '',
              pathname: '/*/*',
              search: '',
            },
        ],
    }


};

export default nextConfig;
