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
          url: 'aboutme',
        },
        {
          title: 'About This Site',
          url: 'aboutsite',
        },
      ],
    },
    {
      title: 'Work Demo',
      url: 'work-demo',
      submenu: [
        {
          title: 'Teaching Demo',
          url: 'teachingdemo',
        },
        {
          title: 'IT Samples',
          url: 'it-samples',
          submenu: [
          {
            title: 'Web Works',
            url: 'web-works',
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
