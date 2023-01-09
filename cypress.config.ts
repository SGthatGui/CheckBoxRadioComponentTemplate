import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:1234",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
