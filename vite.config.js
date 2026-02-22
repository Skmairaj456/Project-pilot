import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    middlewareMode: false,
    middleware: [
      (req, res, next) => {
        if (req.url.startsWith('/') && !req.url.includes('.') && !req.url.startsWith('/api')) {
          req.url = '/index.html'
        }
        next()
      }
    ]
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
