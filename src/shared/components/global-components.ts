import DefaultLayout from '@/shared/layouts/Default.vue'
import DefTable from "./lib/DefTable.vue";


export function registerGlobalComponents(app) {
  const Vue = app; 
  Vue.component('DefaultLayout', DefaultLayout);
  Vue.component('DefTable', DefTable);
}