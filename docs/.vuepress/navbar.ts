import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  // {
  //   text: '开始使用',
  //   items: [{ text: '示例', link: '/notes/demo/README.md' }]
  // },
  {
    text: '开始使用',
    link: '/help/start/'
  },
  {
    text: '更新日志',
    link: '/logs/w68tciha/'
  },
  { text: '博客', 
    items: [
      { text: '博客', link: '/blog/' },
      { text: '标签', link: '/blog/tags/' },
      { text: '归档', link: '/blog/archives/' },
    ]
  },
])
