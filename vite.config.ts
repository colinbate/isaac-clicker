import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), VitePWA({
    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico,webp}'],
    },
    registerType: "autoUpdate",
    manifest: {
        "background_color": "#1f2937",
        "theme_color": "#1f2937",
        "name": "Isaac Clicker",
        "short_name": "IClicker",
        "start_url": "/",
        "display": "standalone",
        "icons": [
          {
              "src": "/android-chrome-192x192.png",
              "sizes": "192x192",
              "type": "image/png"
          },
          {
              "src": "/android-chrome-512x512.png",
              "sizes": "512x512",
              "type": "image/png"
          }
      ]
    }
  })]
})
