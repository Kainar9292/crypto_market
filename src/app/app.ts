import { createApp } from 'vue'
import '@/app/styles/app.less'
import 'uno.css';
// import 'ant-design-vue/dist/antd.min.css';
import { router, setupRouter } from './router';
import { registerGlobalComponents } from '@/app/providers/register-global-components'
import { registerModules } from './providers/register-modules';
import App from './App.vue'
import { setupPlugins } from './providers/setup-plugins';

// Your key: 6213eaf7-73a2-4fb5-bcf2-378aee47e0f2


export async function init() {

  const app = createApp(App)

  registerModules(router)

  setupRouter(app)
  
  setupPlugins(app)

  registerGlobalComponents(app)

  app.mount('#app')
}


