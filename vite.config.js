import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // or any other port you're using
    strictPort: true,
    host: true,
    hmr: {
      protocol: "ws",
      host: "localhost",
    },

    // proxy: {
    //   '^/api': {
    //     target: 'http://localhost:8000', // or your API server URL
    //     changeOrigin: true
    //   }
    // }
  },
});
