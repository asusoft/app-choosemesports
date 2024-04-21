import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Define aliases for path mapping
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // Optionally include React dependencies for faster HMR
  },
});