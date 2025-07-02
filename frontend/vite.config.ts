import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 8080,
    allowedHosts: ['yboiroux.cleverapps.io', 'app-9ed55f79-55f4-468f-9357-90c279a05115.cleverapps.io']
  }
})