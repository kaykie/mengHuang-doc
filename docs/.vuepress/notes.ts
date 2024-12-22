import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const demoNote = defineNoteConfig({
  dir: 'help',
  link: '/help/',
  sidebar: ['README.md','使用虚拟机','一键日常.md', '自动副本功能.md', '自动抓鬼功能.md','低价秒非珍.md','周一自动门派.md','自动三界、科举','新区抢铅.md'],
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [demoNote],
})
