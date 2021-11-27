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
      '/向历史学管理.md',
      '/人生自我管理.md'
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
