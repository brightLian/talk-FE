module.exports = {
  title: 'BrightLian 前端杂记',
  themeConfig: {
    logo: '/image/logo.jpg',
    head: [
      ['link', { rel: 'icon', href: '/image/logo.jpg' }]
    ],
    navbar: [
      { text: '首页', link: '/' },
      { text: '进入', link: '/introduction' },
      {
        text: '其他链接',
        children: [
          {
            text: '前端面试指南',
            link: 'https://github.com/brightLian/interview-FE'
          },
          {
            text: 'leetcode算法JS版本',
            link: 'https://github.com/brightLian/leetcode-FE'
          }
        ]
      },
      { text: 'github', link: 'https://github.com/brightLian/talk-FE' }
    ],
    sidebar: [
      '/introduction.md',
      {
        text: '2021年',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          {
            text: '2021年11月',
            link: '/2021/Nov.md'
          },
          {
            text: '2021年12月',
            link: '/2021/Dec.md'
          }
        ]
      },
      {
        text: '2022年',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          {
            text: '2022年1月',
            link: '/2022/Jan.md'
          },
          {
            text: '2022年2月',
            link: '/2022/Feb.md'
          }
        ]
      },
    ],
    sidebarDepth: 2,
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ]
};
