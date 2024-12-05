import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@styles': '/src/styles',
      '@pages': '/src/pages',
      '@kovo-types': '/src/interfaces',
      '@constants': '/src/constants'
    },
  },
})
