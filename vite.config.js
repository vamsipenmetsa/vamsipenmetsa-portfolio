import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages needs /vamsipenmetsa-portfolio/ base
  // IPFS/Fleek builds use BASE_PATH=/ via build:ipfs script
  base: process.env.BASE_PATH || '/vamsipenmetsa-portfolio/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
