// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Configuración para cargar SVGs como componentes de React
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // Esto aplica a todos los archivos .svg
      use: ['@svgr/webpack'], // Usa svgr para convertir SVG en componentes React
    });

    return config;
  },
};

export default nextConfig;
