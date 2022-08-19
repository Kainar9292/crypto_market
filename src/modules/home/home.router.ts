import type { RouteRecordRaw, Router } from 'vue-router';

const HomeMain = () => import('@/modules/home/pages/HomeMain.vue');

const moduleRoute: RouteRecordRaw = {
  path: '/home',
  component: () => import('@/shared/components/TheEmptyRouterViewWithModal.vue'),
  children: [
    {
      path: '',
      name: 'Home.Main',
      meta: {
        title: 'Общие данные',
      },
         component: HomeMain,
    },
  ],
};

export default (router: Router) => {
  router.addRoute('Coin', moduleRoute);
};
