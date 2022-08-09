import type { RouteRecordRaw, Router } from 'vue-router';

const CoinMain = () => import('@/modules/coin/pages/CoinMain.vue');

const moduleRoute: RouteRecordRaw = {
  path: '/coins',
  component: () => import('@/shared/components/TheEmptyRouterViewWithModal.vue'),
  children: [
    {
      path: '',
      name: 'Coin.Main',
      meta: {
        title: 'Монеты',
      },
      component: CoinMain,
    },
  ],
};

export default (router: Router) => {
  router.addRoute('Coin', moduleRoute);
};
