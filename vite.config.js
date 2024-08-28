import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
  root: './src/',
  base: '/coca_site/',
  server: {
    port: 3000,
    open: true,
  },
  publicDir:'./src/assets',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './src/index.html',
        pricing: './src/pricing.html',
        contacts: './src/contacts.html',
        about: './src/about.html',
        blog: './src/blog.html',
        article_1: './src/article-1.html',
      }
    }
  },
  plugins: [
    injectHTML(),
    ViteMinifyPlugin(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    }),
  ],
});
