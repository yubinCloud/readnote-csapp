module.exports = {
  title: 'CSAPP Readnote',
  description: 'Just playing around',
  base: '/readnote-csapp/',
  theme: 'antdocs',

  markdown: {
    lineNumbers: true,
  },

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

    plugins: [
      '@vuepress/back-to-top',
      'vuepress-plugin-mathjax',
      ['vuepress-plugin-code-copy', true],
    ],
  }
}