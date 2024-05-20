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
        destination: "https://potlock.org/og-traction-post",
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
          "https://gov.near.org/t/near-pgf-potlock-outlook-traction-money-a-minimal-governance-approach-to-retroactive-public-goods-funding-discussion/39426/1",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
