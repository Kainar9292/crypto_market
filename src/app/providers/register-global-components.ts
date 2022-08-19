import type { App } from 'vue';
import DefaultLayout from '@/shared/layouts/Default.vue'
import DefTable from "../../shared/components/lib/DefTable.vue";


export function registerGlobalComponents(app: App) {
  app.component('DefaultLayout', DefaultLayout);
  app.component('DefTable', DefTable);
}