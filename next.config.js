/** @type {import('next').NextConfig} */
const nextConfig = {
  // swcMinify ya no es necesario en versiones más recientes
  experimental: {
    // Agrega aquí cualquier característica experimental que necesites
  },
  images: {
    domains: [], // Agrega los dominios de imágenes que necesites
  },
}

module.exports = nextConfig