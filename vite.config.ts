import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'rocketseat-ignite-challenge-coffee-delivery',
  plugins: [react()],
})
