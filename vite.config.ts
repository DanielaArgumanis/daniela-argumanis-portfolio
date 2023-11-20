import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@commonComponents': '/src/common/components',
      '@components': '/src/components',
      '@constants': '/src/common/Constants',
      '@icons': '/src/common/Icons',
      '@images': '/src/common/Images',
      '@styles': '/src/common/Styles',
      '@theme': '/src/common/Theme',
    },
  },
});
