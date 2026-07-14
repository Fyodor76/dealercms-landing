/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  output: "standalone",
  env: {
    SMTP_PASS: process.env.SMTP_PASS,
  }
};

export default nextConfig;
