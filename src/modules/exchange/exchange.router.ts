import type { RouteRecordRaw, Router } from 'vue-router';

const ExchangeMain = () => import('@/modules/exchange/pages/ExchangeMain.vue');

const moduleRoute: RouteRecordRaw = {
  path: '/exchanges',
  component: () => import('@/shared/components/TheEmptyRouterViewWithModal.vue'),
  children: [
    {
      path: '',
      name: 'Exchange.Main',
      meta: {
        title: 'Обменники',
      },
      component: ExchangeMain,
    },
  ],
};

export default (router: Router) => {
  router.addRoute('Exchange', moduleRoute);
};
