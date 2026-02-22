import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    middlewareMode: false,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  // For SPA routing fallback
  configureServer(server) {
    return () => {
      server.middlewares.use((req, res, next) => {
        // Serve index.html for all non-file routes (for SPA)
        if (!req.url.includes('.') && !req.url.startsWith('/api') && !req.url.startsWith('/@')) {
          req.url = '/index.html'
        }
        next()
      })
    }
  }
})
