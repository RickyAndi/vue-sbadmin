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
    name: 'Chart (lazy load)',
    hasChild: false
  },
  {
    icon: 'fa fa-fw fa-keyboard-o',
    name: 'Form',
    hasChild: true,
    childs: [
      {
        icon: 'fa fa-fw fa-sign-in',
        name: 'Login',
        path: '/form'
      },
      {
        icon: 'fa fa-fw fa-mail-forward',
        name: 'Step form',
        path: '/step-form'
      }
    ]
  },
  {
    icon: 'fa fa-fw fa-user',
    name: 'User (Nested Route)',
    hasChild: false,
    path: '/user'
  },
  {
    icon: 'fa fa-fw fa-linux',
    name: 'Modal',
    hasChild: false,
    path: '/modal'
  },
  {
    icon: 'fa fa-fw fa-linux',
    name: 'Vue Table',
    hasChild: false,
    path: '/vue-table'
  },
  {
    icon: 'fa fa-fw fa-linux',
    name: 'Crud',
    hasChild: false,
    path: '/crud'
  }
];