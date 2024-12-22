import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://joke-gif.oss-cn-beijing.aliyuncs.com/icon.png?Expires=1734874108&OSSAccessKeyId=TMP.3KijPty5Jf2ygc29LVmHj1hcbkCBL7MJSX6Tn6upJho2cJeaJCdmj8SRRmdd4RMuL3U1mtbrWVXKw3RkGXojo4VtVCFSLX&Signature=cWU0q%2FmtrX7BHPo5KbjP34CAHIo%3D',

  appearance: true,

  profile: {
    avatar: 'https://joke-gif.oss-cn-beijing.aliyuncs.com/icon.png?Expires=1734874108&OSSAccessKeyId=TMP.3KijPty5Jf2ygc29LVmHj1hcbkCBL7MJSX6Tn6upJho2cJeaJCdmj8SRRmdd4RMuL3U1mtbrWVXKw3RkGXojo4VtVCFSLX&Signature=cWU0q%2FmtrX7BHPo5KbjP34CAHIo%3D',
    name: '悠然助手',
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
