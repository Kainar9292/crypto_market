import Antd from 'ant-design-vue/es';
import type { App } from 'vue';



export function setupPlugins(app: App) {
  app.use(Antd);
}
