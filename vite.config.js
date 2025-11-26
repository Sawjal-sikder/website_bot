import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 14007,
    host: '0.0.0.0',
    allowedHosts: ['orderwithpluto.com', 'www.orderwithpluto.com', 'https://orderwithpluto.com', 'https://www.orderwithpluto.com'],

  }
})
