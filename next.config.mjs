/**
 * Exportação estática (pasta `out/`) para hospedar no GitHub Pages.
 * NEXT_PUBLIC_BASE_PATH = "/nome-do-repo" quando publicado em usuario.github.io/nome-do-repo.
 * Em desenvolvimento local fica vazio.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
