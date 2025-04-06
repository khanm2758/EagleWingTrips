///////////////////////////////////////////////////

import { defineConfig } from "vite";
import lightningcss from "vite-plugin-lightningcss";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "", // Add this line
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // ✅ Define alias for "src"
    },
  },

  css: {
    preprocessorOptions: {
      scss: {},
    },
  },

  plugins: [
    lightningcss({
      browserslist: "last 2 versions",
      minify: true,
    }),
  ],
});
