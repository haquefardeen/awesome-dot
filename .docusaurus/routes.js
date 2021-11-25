
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','520'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','6c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','ddf'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','ede'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','4c2'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','752'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/','5b3'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/','96c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/about-kusama',
        component: ComponentCreator('/about-kusama','522'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/about-polkadot',
        component: ComponentCreator('/about-polkadot','913'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Dapps',
        component: ComponentCreator('/Dapps','944'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/explore',
        component: ComponentCreator('/explore','a4a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Jobs',
        component: ComponentCreator('/Jobs','ed5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/kusama-projects',
        component: ComponentCreator('/kusama-projects','66e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/learning',
        component: ComponentCreator('/learning','bf5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Related-Resources',
        component: ComponentCreator('/Related-Resources','c21'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tools',
        component: ComponentCreator('/tools','a63'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wallets',
        component: ComponentCreator('/Wallets','e60'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/whitepaper',
        component: ComponentCreator('/whitepaper','c99'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Youtube Channels That Are Translating The Content of Polkadot',
        component: ComponentCreator('/Youtube Channels That Are Translating The Content of Polkadot','64a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/YouTube sessions',
        component: ComponentCreator('/YouTube sessions','39e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
