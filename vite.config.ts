import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // 1. Naikkan batas limit peringatan (misalnya jadi 1000 kB / 1 MB)
    chunkSizeWarningLimit: 1000,
    
    // 2. Pisahkan dependensi dari node_modules menjadi file (chunk) terpisah
    rollupOptions: { 
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Ini akan membuat file terpisah bernama 'vendor-[hash].js'
            return 'vendor';
          }
        }
      }
    }
  }
})