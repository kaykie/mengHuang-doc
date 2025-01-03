import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const demoNote = defineNoteConfig({
  dir: 'help',
  link: '/help/',
  sidebar: [
    'README.md',
    '使用虚拟机',
    '一键日常.md',
    '自动副本功能.md', 
    '自动抓鬼功能.md',
    '低价秒非珍.md',
    '周一自动门派.md',
    '自动三界、科举',
    '新区抢铅.md'
  ],
})
const logNote = defineNoteConfig({
  dir: '/',
  link: '/',
  sidebar: [
    {
      text:'开始使用',link:'/help/all-start/',
      
    },
    {
      text:'梦幻西游手游',prefix:'/menghuan/',collapsed:true,
      items:[
        {
          text:'开始使用',link:'/help/start/',
          
        },
        {
          text:'使用虚拟机',
          link:'/help/xejh8sxr/'
        },
        {
          text:'一键日常',
          link:'/help/ga7ah6kh/'
        },
        {
          text:'自动副本功能',
          link:'/help/69y9lhj6/'
        },
        {
          text:'自动抓鬼功能',
          link:'/help/tb561b7g/'
        },
        {
          text:'低价秒非珍',
          link:'/help/q62639g4/'
        },
        {
          text:'周一自动门派',
          link:'/help/pm1sbw4v/'
        },
        {
          text:'自动三界、科举',
          link:'/help/50o8buc4/'
        },
        {
          text:'新区抢铅',
          link:'/help/uum1yqlg/'
        },
        {
          text:'日志上报',
          link:'/help/q62639g1/'
        },
      ]
    },
    {text:'更新日志',prefix:'/logs',items:[
      {
        text:'2024-12-22',
        link:'/logs/w68tciha/'
      },
      {
        text:'2024-12-24',
        link:'/logs/mzwe5j3g/'
      },
      {
        text:'2024-12-25',
        link:'/smmb2xmm/'
      },
      {
        text:'2024-12-27',
        link:'/pur25c8o/'
      },
      {
        text:'2024-12-30',
        link:'/dg1w8up5/'
      },
      {
        text:'2024-12-31',
        link:'/dg1wup5/'
      },
      {
        text:'2025-01-03',
        link:'/7o199vpn/'
      }
    ]},
    {
      text:'签到助手',prefix:'/autoClock/',collapsed:true,
      items:[
        {
          text:'开始使用',link:'/autoClock/start/',
        },
      ]
    },
    
  ]
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [logNote],
})
