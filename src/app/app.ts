import { createApp } from 'vue'
import '@/app/style/app.scss'
import 'uno.css';
import 'ant-design-vue/dist/antd.min.css';
import router from './router';
import { registerGlobalComponents } from '@/shared/components/global-components'
import Antd from 'ant-design-vue/es'
import { registerModules } from './providers/register-modules';
import App from './App.vue'

// Your key: 6213eaf7-73a2-4fb5-bcf2-378aee47e0f2


export async function init() {

  const app = createApp(App)
  .use(Antd)

  registerModules(router)

  app.use(router)


  registerGlobalComponents(app)

  app.mount('#app')

}


