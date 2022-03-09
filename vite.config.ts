import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import autoImport from 'unplugin-auto-import/vite'
import imp from 'vite-plugin-imp'
import antdDayjs from 'antd-dayjs-vite-plugin'

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
          libDirectory: 'es',
          style: (name) => `antd/es/${name}/style`,
        },
        {
          libName: '@formily/antd',
          libDirectory: 'esm',
          style: (name) => `@formily/antd/esm/${name}/style`,
        },
      ],
    }),
    antdDayjs(),
  ],
  resolve: {
    alias: {
      '~antd': 'antd',
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
})
