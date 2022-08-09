import { defineConfig } from 'vite'
import path from 'path';
import Unocss from 'unocss/vite';

import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite';


export default defineConfig({
  plugins: [
    vue({reactivityTransform: true}), 
    Unocss(), 
    AutoImport({
    imports: [
      'vue',
      'vue-router',
      {
        'ant-design-vue': ['notification', 'message', 'Modal'],
      },
    ],
    dts: true,
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
},
})
