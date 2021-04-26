import Starter from '../views/starter/starter.jsx';
import Summary from '../views/summary/summary.jsx';

var ThemeRoutes = [
  { 
    path: '/summary', 
    name: 'Summary', 
    icon: 'ti-loop', 
    component: Summary
  },
  { 
    path: '/vulnerability',
    name: 'Vulnerability',
    icon: 'ti-loop',
    component: Starter
  },
  { 
    path: '/clustering',
    name: 'Clustering',
    icon: 'ti-loop',
    component: Starter
  },
  { 
    path: '/classification',
    name: 'Classification',
    icon: 'ti-loop',
    component: Starter
  },
  { 
    path: '/sensitivity',
    name: 'Sensitivity',
    icon: 'ti-loop',
    component: Starter
  },
  { 
    path: '/inventory',
    name: 'Inventory',
    icon: 'ti-loop',
    component: Starter
  }
  // ,
  // {
  //   path: '/dashboard', 
  //   name: 'Dashboard', 
  //   icon: 'ti-loop', 
  //   component: Starter 
  // },
  // {
  //   path: '/alert',
  //   name: 'Alerts',
  //   icon: 'mdi mdi-comment-processing-outline',
  //   component: Alerts
  // },
  // {
  //   path: '/badge',
  //   name: 'Badges',
  //   icon: 'mdi mdi-arrange-send-backward',
  //   component: Badges
  // },
  // {
  //   path: '/button',
  //   name: 'Buttons',
  //   icon: 'mdi mdi-toggle-switch',
  //   component: Buttons
  // },
  // {
  //   path: '/card',
  //   name: 'Cards',
  //   icon: 'mdi mdi-credit-card-multiple',
  //   component: Cards
  // },
  // {
  //   path: '/grid',
  //   name: 'Grid',
  //   icon: 'mdi mdi-apps',
  //   component: LayoutComponent
  // },
  // {
  //   path: '/pagination',
  //   name: 'Pagination',
  //   icon: 'mdi mdi-priority-high',
  //   component: PaginationComponent
  // },
  // {
  //   path: '/popover',
  //   name: 'Popover',
  //   icon: 'mdi mdi-pencil-circle',
  //   component: PopoverComponent
  // },
  // {
  //   path: '/ui-components/tooltip',
  //   name: 'Toltips',
  //   icon: 'mdi mdi-image-filter-vintage',
  //   component: TooltipComponent
  // }
  ,
  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true }
];
export default ThemeRoutes;
