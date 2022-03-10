import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import autoImport from 'unplugin-auto-import/vite'
import antdDayjs from 'antd-dayjs-vite-plugin'
import imp from 'vite-plugin-imp'

export default defineConfig(({ command }) => {
  const common: UserConfig = {
    plugins: [
      react(),
      eslint(),
      autoImport({
        imports: ['react'],
        dts: './src/auto-imports.d.ts',
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
  }

  if (command === 'serve') {
    return {
      ...common,
      plugins: [
        ...common.plugins,
        imp({
          libList: [
            {
              libName: 'antd',
              libDirectory: 'dist',
              style: () => 'antd/dist/antd.css',
            },
            {
              libName: '@formily/antd',
              libDirectory: 'dist',
              style: () => `@formily/antd/dist/antd.css`,
            },
          ],
        }),
      ],
    }
  } else {
    return {
      ...common,
      plugins: [
        ...common.plugins,
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
      ],
    }
  }
})
