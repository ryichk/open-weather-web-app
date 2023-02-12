/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    SAMPLE: process.env.SAMPLE,
  },
  images: {
    domains: ['api.openweathermap.org'],
  },
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
  },
};
