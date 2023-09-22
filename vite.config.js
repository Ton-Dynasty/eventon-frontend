import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

const customStaticCopyPlugin = {
  name: 'custom-static-copy',
  setup(build) {
    const staticCopy = viteStaticCopy({
      targets: [
        {
          src: 'node_modules/shiki',
          dest: '.',
        },
      ],
    });
    if (staticCopy.setup) {
      staticCopy.setup(build);
    }
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  base: '/eventon-frontend/',
  plugins: [react(), wasm(), topLevelAwait()],
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
      // Enable esbuild polyfill plugins
      plugins: [
        customStaticCopyPlugin,
        NodeGlobalsPolyfillPlugin({
          buffer: true,
          process: true,
        }),
      ],
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        customStaticCopyPlugin,
        wasm(),
        topLevelAwait(),
        NodeGlobalsPolyfillPlugin({
          buffer: true,
          process: true,
        }),
        nodePolyfills(),
      ],
    },
  },
  worker: {
    plugins: [wasm(), topLevelAwait()],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
