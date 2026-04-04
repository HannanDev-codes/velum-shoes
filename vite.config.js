import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/velum-shoes/', // matches your repo name
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});