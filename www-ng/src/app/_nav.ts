export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Calendar',
    url: '/calendar',
    icon: 'icon-drop'
  },
  {
    name: 'Rooms',
    url: '/rooms',
    icon: 'icon-pencil'
  },
  {
    name: 'Account',
    url: '/account',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Profile',
        url: '/account/profile',
        icon: 'icon-puzzle'
      },
      {
        name: 'Channels',
        url: '/account/channels',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Reports',
    url: '/reports',
    icon: 'icon-cursor'
  },
  {
    name: 'Devices',
    url: '/devices',
    icon: 'icon-pie-chart'
  }
];
