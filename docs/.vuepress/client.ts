import { defineClientConfig } from 'vuepress/client'
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import CustomComponent from './theme/components/Custom.vue'
import IPC from './theme/components/IPC/index.vue'
import './theme/styles/custom.css'
import UnionAd from './theme/components/unionAd/index.vue'
import GlobalWrapper from './theme/components/globalWrapper/index.vue'
import { Layout } from 'vuepress-theme-plume/client'
import { h } from 'vue'


export default defineClientConfig({
  enhance({ app,siteData }) {
    app.component('IPC', IPC)
    app.component('UnionAd', UnionAd)
    console.log(siteData)
    // app.component('CustomComponent', CustomComponent)
  },
  layouts: {
    Layout: () => h(Layout, null, {
      'aside-bottom': () => h(UnionAd),
    }),
  },
  setup(){
    console.log('setup')

  }
})
