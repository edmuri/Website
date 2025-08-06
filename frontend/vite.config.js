import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    pluggins: [react()],
    base:"/Website"
});