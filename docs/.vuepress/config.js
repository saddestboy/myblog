// docs/.vuepress/config.js
module.exports = {
  title: "学习笔记",
  description: "一点学习过程中的笔记，随便看看XD",

  markdown: {
    lineNumbers: true,
  },
  base: '/myblogs/',
  locales: {
        '/': {
          lang: 'zh-CN'
        }},
  themeConfig: {
    sidebar: [
      {
        title: '学习笔记',
        children: ['/mylearning/目录' ],
        initialOpenGroupIndex: 1 // 可选的, 默认值是 0
      }
    ]
  },
};