// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        card: resolve(__dirname, "pages/card/index.html"),
        deliveryPoints: resolve(__dirname, "pages/deliveryPoints/index.html"),
        good: resolve(__dirname, "pages/good/index.html"),
        wishes: resolve(__dirname, "pages/good/index.html"),
      },
    },
  },
});
