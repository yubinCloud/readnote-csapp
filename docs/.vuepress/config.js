module.exports = {
  title: 'CSAPP Readnote',
  description: 'Just playing around',
  base: '/readnote-csapp/',
  theme: 'antdocs',

  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    // baidu 统计
    ["script", {src: "https://hm.baidu.com/hm.js?d0bc939bf51d0eb349452f93e92f69b8"}]
  ],

  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [0, 1, 2] }
  },

  locales: {
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
    },
  },

  plugins: [
    '@vuepress/back-to-top',
    [
      // 支持数学公式
      // https://vuepress.github.io/zh/plugins/mathjax/
      // npm install -D vuepress-plugin-mathjax
      'vuepress-plugin-mathjax',
      {}
    ],
    ['vuepress-plugin-code-copy', true],
  ],

  themeConfig: {
    logo: '/favicon.ico',
    lastUpdated: 'Last Updated',
    repo: 'https://github.com/yubinCloud/readnote-csapp',
    repoLabel: '查看源码',
    sidebar: 'auto',

    nav: [
      {
        text: 'Read Note',
        items: [
          { text: '2-信息的处理与表示', link: '/note/ch2/' },
          { text: '3-程序的机器级表示', link: '/note/ch3/' }
        ]
      }
    ],
  }
}