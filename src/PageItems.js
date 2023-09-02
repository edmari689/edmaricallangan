export const pageItems = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'About',
      url: 'about',
      submenu: [
        {
          title: 'About My Background',
          url: 'about-life',
        },
        {
          title: 'About This Site',
          url: 'about-site',
        },
      ],
    },
    {
      title: 'Work Demo',
      url: 'work-demo',
      submenu: [
        {
          title: 'Teaching Demo',
          url: 'teaching-demo',
        },
        {
          title: 'IT Samples',
          url: 'it-samples',
          submenu: [
          {
            title: 'React Works',
            url: 'react-works',
          },
          {
            title: 'Other IT Works',
            url: 'it-sub',
            submenu: [
              {
                title: 'Unreal',
                url: 'unreal',
              },
              {
                title: 'Audacity',
                url: 'audacity',
              },
            ],
          },
        ],
      },
      ],
    },
    {
      title: 'Contact',
      url: 'contact',
    },
  ];
