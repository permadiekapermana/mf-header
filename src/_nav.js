export default [
  {
    component: 'CNavItem',
    name: 'Home',
    to: '/sc/dashboard',
    icon: 'cilHome',
  },
  {
    component: 'CNavGroup',
    name: 'Security Center',
    to: '#',
    icon: 'cil-shield-alt',
    items: [
      {
        component: 'CNavItem',
        name: 'Master',
        to: '#',
        items: [
          {
            component: 'CNavItem',
            name: 'User',
            to: '/sc/user',
            icon: 'cilUser',
          },
          {
            component: 'CNavItem',
            name: 'Role',
            to: '/sc/role',
            icon: 'cilGroup',
          },
          {
            component: 'CNavItem',
            name: 'Application',
            to: '/sc/application',
            icon: 'cilApps',
          },
          {
            component: 'CNavItem',
            name: 'Function',
            to: '/sc/function',
            icon: 'cilSitemap',
          },
          {
            component: 'CNavItem',
            name: 'Feature',
            to: '/sc/feature',
            icon: 'cilEqualizer',
          },
          {
            component: 'CNavItem',
            name: 'Menu',
            to: '/sc/menu',
            icon: 'cilListRich',
          },
        ],
      },
    ],
  },
  {
    component: 'CNavItem',
    name: 'Mapping',
    to: '/sc/mapping',
    icon: 'cil-puzzle',
  },
  {
    component: 'CNavGroup',
    name: 'KPI',
    to: '/sc/kpi/master',
    icon: 'cil-star',
    items: [
      {
        component: 'CNavItem',
        name: 'Master',
        to: '/sc/kpi/master',
      },
      {
        component: 'CNavItem',
        name: 'Transaction',
        to: '/sc/kpi/transactions',
      },
    ],
  },
  {
    component: 'CNavItem',
    name: 'Data Integration',
    to: '/sc/data',
    icon: 'cil-chart-pie',
  },
  // {
  //   component: 'CNavItem',
  //   name: 'Download CoreUI',
  //   href: 'http://coreui.io/vue/',
  //   icon: { name: 'cil-cloud-download', class: 'text-white' },
  //   _class: 'bg-success text-white',
  //   target: '_blank'
  // },
  // {
  //   component: 'CNavItem',
  //   name: 'Try CoreUI PRO',
  //   href: 'http://coreui.io/pro/vue/',
  //   icon: { name: 'cil-layers', class: 'text-white' },
  //   _class: 'bg-danger text-white',
  //   target: '_blank'
  // }
]
