import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import voie from "vite-plugin-voie";
import { VitePWA } from "vite-plugin-pwa";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
import path from "path";
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    vue(),
    voie(),
    svgLoader({
      svgo: true,
      svgoConfig: {
        multipass: true,
      },
    }),
    vueI18n({
      include: path.resolve(__dirname, "./src/i18n/messages/**"),
    }),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        theme_color: "#353535",
        background_color: "#fdfdfd",
        display: "standalone",
        scope: "/",
        start_url: "/",
        name: "Pwa Exemple",
        short_name: "Pwa Exemple",
        description: "Vue template pwa exemple!",
        icons: [
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {},
    }),
  ],
});
