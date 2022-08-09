
import { PageName } from '@/shared/enums/common.enum';


export const routes = [
  {
    path: '',
    name: PageName.BASE_LAYOUT,
    component: () => import('@/shared/layouts/Default.vue'),
    redirect: {  name: PageName.BASE_HOME  },
    children: []
  },
];
