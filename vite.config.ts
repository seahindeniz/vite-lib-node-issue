import {resolve} from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      fileName: 'main',
      name: 'main',
      formats: ['es', 'cjs', 'umd', 'iife'],
    },
  },
})