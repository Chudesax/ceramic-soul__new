import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  input: {
    main: resolve(import.meta.dirname, "index.html"),
    about: resolve(import.meta.dirname, "about.html"),
  },
});
