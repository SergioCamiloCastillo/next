module.exports = {
  env: {
    API_URL: 'https://idevcol.com',
    IMAGES_DOMAIN: 'https://idevcol.com/',
  },
  publicRuntimeConfig: {
    API_URL: 'https://idevcol.com/',
    IMAGES_DOMAIN: 'https://idevcol.com/',
  },
  images: {
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96],
    domains: ['idevcol.com'],
    path: "/_next/image",
    loader: "default",
  },
  webpack5: false,
};
