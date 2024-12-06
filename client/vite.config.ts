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
      '@types-kovo': '/src/types',
      '@constants': '/src/constants',
      '@contexts': '/src/contexts',
      '@queries': '/src/queries',
      '@hooks': '/src/hooks'
    },
  },
})
