/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://www.alpine-conferences.com/agent-conf-2022/',
        permanent: true,
      },
    ];
  },
};
