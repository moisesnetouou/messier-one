/// <reference types="vitest" />

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    css: true,
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/lib/vitest/config/setup.ts',
    reporters: ['verbose'],
    clearMocks: true,
    coverage: {
      provider: 'v8',
      all: true,
      exclude: [
        '**/src/**/@types/**',
        '**/src/tests/**',
        '**/dist/**',
        '**/node_modules/**',
        '**/src/config/**',
        '**/public/**',
        '**/server/**',
        '**/vite.config.ts',
        '**/src/vite-env.d.ts',
        '**/src/app/layout.tsx',
        '**/src/styles/**',
        '**/src/**/types.ts',
        '.next/**',
        'next-env.d.ts',
        'next.config.js',
        'postcss.config.js',
        'tailwind.config.js',
        'tailwind.config.ts',
        'vitest.config.ts',
        '**/src/pages/_app.page.tsx',
        '**/src/pages/_document.page.tsx',
        '**/lib/**',
      ],
    },
  },
});
