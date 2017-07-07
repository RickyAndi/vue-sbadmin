export default [
  {
    path: '/dashboard',
    icon: 'fa fa-fw fa-dashboard',
    name: 'Dashboard',
    hasChild: false
  },
  {
    path: '/table',
    icon: 'fa fa-fw fa-table',
    name: 'Table',
    hasChild: false
  },
  {
    path: '/chart',
    icon: 'fa fa-fw fa-bar-chart-o',
    name: 'Chart',
    hasChild: false
  },
  {
    icon: 'fa fa-fw fa-caret-down',
    name: 'Dropdown',
    hasChild: true,
    childs: [
      {
        icon: 'fa fa-fw fa-bar-chart-o',
        name: 'Chart',
        path: '/chart'
      }
    ]
  }
];