import generouted from '@generouted/react-router/plugin';
import react from '@vitejs/plugin-react';
import { resolve } from "path";
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                404: resolve(__dirname, '404.html'),
            }
        }
    }, plugins: [react(), generouted()]
})
