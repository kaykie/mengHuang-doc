import { defineClientConfig } from 'vuepress/client'
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import CustomComponent from './theme/components/Custom.vue'
import IPC from './theme/components/IPC/index.vue'
import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    app.component('IPC', IPC)
    // app.component('CustomComponent', CustomComponent)
  },
})
