import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import faroUploader from "@grafana/faro-rollup-plugin";


export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  if (!env.VITE_GRAFANA_FARO_API_KEY) {
    console.warn(
      "VITE_GRAFANA_FARO_API_KEY is not set in your .env file or shell environment."
    );
    console.warn(
      "Source maps will not be uploaded to Grafana Faro. Please ensure it's defined."
    );
  }

  return {
    plugins: [
      react(),
      faroUploader({
        appName: "ali.viation",
        endpoint: "https://faro-api-prod-ap-south-1.grafana.net/faro/api/v1",
        appId: "1003",
        stackId: "1301883",
        apiKey: env.VITE_GRAFANA_FARO_API_KEY,
        gzipContents: true,
      }),
    ],
  };
});
