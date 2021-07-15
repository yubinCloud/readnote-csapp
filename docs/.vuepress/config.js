module.exports = {
  title: 'CSAPP Readnote',
  description: 'Just playing around',
  base: '/readnote-csapp/',
  theme: 'antdocs',
  repo: 'https://github.com/yubinCloud/readnote-csapp',
  repoLabel: '查看源码',
  editLinks: true,
  editLinkText: '帮助我们改善此页面！',
  themeConfig: {
    lastUpdated: 'Last Updated',
    sidebar: [
      {
        title: 'read note',   // 必要的
        collapsable: false,
        sidebarDepth: 0,
        children: [
          {
            title: '2-信息的表示与处理',
            path: '/note/ch2/',
          },
        ]
      },
    ],
  }
}
  
