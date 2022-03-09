import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import autoImport from 'unplugin-auto-import/vite'
import imp from 'vite-plugin-imp'

export default defineConfig({
  plugins: [
    react(),
    eslint(),
    autoImport({
      imports: ['react'],
      dts: './src/auto-imports.d.ts',
    }),
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
