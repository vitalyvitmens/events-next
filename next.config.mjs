/* @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  exportPathMap: async function ({ dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/404': { page: '/404' },
      '/signup': { page: '/signup' },
      '/events/create': { page: '/events/create' },
      '/events/[id]': { page: '/events/[id]' },
      '/events/[id]/edit': { page: '/events/[id]/edit' },
      // добавь другие страницы, если нужно
    }
  },
}
