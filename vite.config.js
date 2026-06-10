import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base must match the GitHub Pages repo name so assets resolve correctly.
export default defineConfig({
  base: '/pancasila-surabaya/',
  plugins: [react()],
})
