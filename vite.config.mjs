import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/ceramic-soul__new/",
  input: {
    main: resolve(import.meta.dirname, "index.html"),
    about: resolve(import.meta.dirname, "about.html"),
  },
});
