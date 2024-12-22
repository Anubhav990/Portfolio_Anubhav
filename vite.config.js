import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // optimizeDeps: {
  //   include: ['cobe'], // Add `cobe` or other dependencies here
  //   exclude: [], // Exclude problematic dependencies if necessary
  // },
})
