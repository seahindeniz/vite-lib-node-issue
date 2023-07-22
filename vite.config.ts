import {resolve} from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    platform: 'node',
    target: 'node16',
  },
  build: {
    target: 'node16',
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      fileName: 'main',
      name: 'main',
      formats: ['es', 'cjs'],
    },
  },
})