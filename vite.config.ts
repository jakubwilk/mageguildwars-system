import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), viteTsconfigPaths()],
  server: {
    open: true,
    port: 3000,
  },
  resolve: {
    alias: {
      config: path.resolve('src/app/config/'),
      locales: path.resolve('src/app/locales/'),
      pages: path.resolve('src/app/pages/'),
      administration: path.resolve('src/modules/administration/'),
      auth: path.resolve('src/modules/auth/'),
      common: path.resolve('src/modules/common/'),
      home: path.resolve('src/modules/home/'),
      resource: path.resolve('src/modules/resource/'),
      user: path.resolve('src/modules/user/'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          lodash: ['lodash'],
          mantine: ['@mantine/core'],
          icons: ['@tabler/icons-react'],
        },
      },
    },
  },
})
