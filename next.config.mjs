/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/bot",
        destination: "https://docs.nada.bot",
        basePath: false,
        permanent: false,
      },
      {
        source: "/learn",
        destination: "https://docs.google.com/document/d/e/2PACX-1vS6QvUl3OyZn6KU0S966FTU4uB1cWy59qXKT57uHKRd7O2poD-mOIoHLcWS5326q8XigD6fpXOJpnep/pub",
        basePath: false,
        permanent: false,
      },
      {
        source: "/github",
        destination: "https://github.com/PotLock",
        basePath: false,
        permanent: false,
      },
      {
        source: "/potlock",
        destination: "https://github.com/PotLock",
        basePath: false,
        permanent: false,
      },
      {
        source: "/discuss",
        destination:
          "https://gov.near.org",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
