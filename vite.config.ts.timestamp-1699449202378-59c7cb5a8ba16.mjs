// vite.config.ts
import { defineConfig } from "file:///home/luander/Documentos/freteminhacidade/node_modules/vite/dist/node/index.js";
import { VitePWA } from "file:///home/luander/Documentos/freteminhacidade/node_modules/vite-plugin-pwa/dist/index.mjs";
import react from "file:///home/luander/Documentos/freteminhacidade/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig(
  {
    plugins: [
      react(),
      VitePWA({
        includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
        manifest: {
          name: "My Awesome App",
          short_name: "MyApp",
          description: "My Awesome App description",
          theme_color: "#ffffff",
          icons: [
            {
              src: "pwa-192x192.png",
              sizes: "192x192",
              type: "image/png"
            },
            {
              src: "pwa-512x512.png",
              sizes: "512x512",
              type: "image/png"
            }
          ]
        }
      })
    ],
    preview: {
      host: "localhost",
      port: 5e3,
      strictPort: true,
      cors: true
    }
  }
);
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9sdWFuZGVyL0RvY3VtZW50b3MvZnJldGVtaW5oYWNpZGFkZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvbHVhbmRlci9Eb2N1bWVudG9zL2ZyZXRlbWluaGFjaWRhZGUvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvbHVhbmRlci9Eb2N1bWVudG9zL2ZyZXRlbWluaGFjaWRhZGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyhcbiAge1xuICBwbHVnaW5zOiBbcmVhY3QoKSxcbiAgICBWaXRlUFdBKHtcbiAgICAgIFxuICAgICAgaW5jbHVkZUFzc2V0czogWydmYXZpY29uLmljbycsICdhcHBsZS10b3VjaC1pY29uLnBuZycsICdtYXNrZWQtaWNvbi5zdmcnXSxcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIG5hbWU6ICdNeSBBd2Vzb21lIEFwcCcsXG4gICAgICAgIHNob3J0X25hbWU6ICdNeUFwcCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTXkgQXdlc29tZSBBcHAgZGVzY3JpcHRpb24nLFxuICAgICAgICB0aGVtZV9jb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICBpY29uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJ3B3YS0xOTJ4MTkyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJ3B3YS01MTJ4NTEyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9KV0sXG4gICAgcHJldmlldzoge1xuICAgICAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gICAgICBwb3J0OiA1MDAwLFxuICAgICAgc3RyaWN0UG9ydDogdHJ1ZSxcbiAgICAgIGNvcnM6IHRydWVcbiAgICB9LFxufVxuKVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2UyxTQUFTLG9CQUFvQjtBQUMxVSxTQUFTLGVBQWU7QUFDeEIsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVE7QUFBQSxFQUNiO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFBQyxNQUFNO0FBQUEsTUFDZCxRQUFRO0FBQUEsUUFFTixlQUFlLENBQUMsZUFBZSx3QkFBd0IsaUJBQWlCO0FBQUEsUUFDeEUsVUFBVTtBQUFBLFVBQ1IsTUFBTTtBQUFBLFVBQ04sWUFBWTtBQUFBLFVBQ1osYUFBYTtBQUFBLFVBQ2IsYUFBYTtBQUFBLFVBQ2IsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFLEtBQUs7QUFBQSxjQUNMLE9BQU87QUFBQSxjQUNQLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsS0FBSztBQUFBLGNBQ0wsT0FBTztBQUFBLGNBQ1AsTUFBTTtBQUFBLFlBQ1I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQUM7QUFBQSxJQUNGLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFlBQVk7QUFBQSxNQUNaLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDSjtBQUNBOyIsCiAgIm5hbWVzIjogW10KfQo=
