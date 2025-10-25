/** @type {import('next').NextConfig} */
const isGithubActions = !!process.env.GITHUB_ACTIONS;

let basePath = undefined;
let assetPrefix = undefined;
if (isGithubActions) {
  const repo = (process.env.GITHUB_REPOSITORY || "").split("/")[1] || "";
  if (repo) {
    basePath = `/${repo}`;
    assetPrefix = `/${repo}/`;
  }
}

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix,
};

export default nextConfig;
