/// <reference types="vitest" />
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), dts({ outDir: "dist", include: ["src/"] })],
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "lvlup-react-hooks",
            formats: ["es", "umd"],
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
    },
    test: {
        globals: true,
        environment: "jsdom", // diferencia entre happy-dom y jsdom
        setupFiles: "./tests/setup.ts", // aca podemos crear configs globales para todos nuestros archivos de test- Ej mocks
    },
});
