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
    ['fulltext-search'],
    [
      // 支持数学公式
      // https://vuepress.github.io/zh/plugins/mathjax/
      // npm install -D vuepress-plugin-mathjax
      'vuepress-plugin-mathjax',
      {}
    ],
    ['homebadge',{
      selector: '.hero',
      repoLink: 'https://github.com/yubinCloud/readnote-csapp',
      badgeLink: 'https://img.shields.io/github/stars/yubincloud/readnote-csapp?style=social',
    }],
    // '@vuepress/medium-zoom',
    // 'copyright',
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    'img-lazy',
    // [
    //   "vuepress-plugin-comment",
    //   {
    //     choosen: "valine",
    //     // options选项中的所有参数，会传给Valine的配置
    //     options: {
    //       el: "#valine-vuepress-comment",
    //       appId: "JlhwpBd8TDaSvOyCS3qXBiX3-gzGzoHsz",
    //       appKey: "OleR4EpPUuxN7yOQ23FdvOde",
    //       path: '<%- frontmatter.to.path %>'
    //     }
    //   }
    // ],
  ],

  themeConfig: {
    logo: '/favicon.ico',
    lastUpdated: 'Last Updated',
    repo: 'yubincloud/readnote-csapp',
    repoLabel: '查看源码',
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'yubincloud/readnote-csapp',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'main',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '在 GitHub 上编辑此页面',

    smoothScroll: true,

    sidebar: 'auto',

    searchMaxSuggestions: 20,

    nav: [
      {
        text: '章节列表 ∨',
        items: [
          { text: '2-信息的处理与表示', link: '/note/ch2/' },
          {
            text: '3-程序的机器级表示',
            link: '/note/ch3/',
            items: [
              { text: '3-I 汇编基础', link: '/note/ch3/assembly-basic' },
              { text: '3-II 控制', link: '/note/ch3/control' },
              { text: '3-III 过程', link: '/note/ch3/procedures' },
              { text: '3-IV 数据', link: '/note/ch3/data' },
            ]
          },
          {
            text: '4-处理器体系结构',
            link: '/note/ch4/',
            items: [
              { text: '4-I Y86-64 指令集体系结构', link: '/note/ch4/Y86-64-ISA' },
              { text: '4-II 逻辑设计与HCL', link: '/note/ch4/logic-design' },
              { text: '4-III Y86-64 的顺序实现', link: '/note/ch4/seq' },
            ]
          },
          { text: '5-优化程序性能', link: '/note/ch5/' },
        ]
      },
      {
        text: 'GitHub',
        link: 'https://github.com/yubincloud/readnote-csapp',
      },
    ],
  }
}