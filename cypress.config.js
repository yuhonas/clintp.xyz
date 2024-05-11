import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    toConsole: true,
  },
  e2e: {
    baseUrl: "http://localhost:8080",
    supportFile: false,
  },
});
