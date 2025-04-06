import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://mp-upload.oss-cn-beijing.aliyuncs.com/icon.png',

  appearance: true,

  profile: {
    avatar: 'https://mp-upload.oss-cn-beijing.aliyuncs.com/icon.png',
    name: '夏火华',
    description: '',
    layout:'right'
    // circle: true,
    // location: '',
    // organization: '',
  },

  navbar,
  notes,
  social: [
    { 
      icon: 'github', 
      link: 'https://github.com/kaykie/mengHuang-doc',
    },
  ]

})
