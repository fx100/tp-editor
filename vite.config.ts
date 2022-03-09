import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import imp from 'vite-plugin-imp'

export default defineConfig({
  plugins: [
    react(),
    eslint(),
    imp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style/css`,
        },
      ],
    }),
  ],
})
