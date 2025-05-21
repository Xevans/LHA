import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// ADMIN PORTAL
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],

  server: {
    port: 3001,
    host: '127.0.0.1'
  },
  
});