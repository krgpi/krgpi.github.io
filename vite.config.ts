import generouted from '@generouted/react-router/plugin';
import mdx from "@mdx-js/rollup";
import react from '@vitejs/plugin-react';
import { resolve } from "path";
import remarkGfm from 'remark-gfm';
import { defineConfig } from 'vite';

export default defineConfig(async () => {

    return {
        build: {
            rollupOptions: {
                input: {
                    main: resolve(__dirname, 'index.html'),
                    404: resolve(__dirname, '404.html'),
                }
            }
        },
        plugins: [
            react(),
            generouted(),
            mdx({
                remarkPlugins: [remarkGfm],
                rehypePlugins: [],
            })
        ]
    }
})
