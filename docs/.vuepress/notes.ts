import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'
import fs from 'fs'
import path from 'path'
const getLogItems = () => {
  const logsDir = path.resolve(__dirname, '../notes/logs')
  const files = fs.readdirSync(logsDir)
    .filter(file => file.endsWith('.md')) // 只获取 markdown 文件
    .map(file => {
      const name = path.basename(file, '.md')
      return {
        text: name, // 文件名作为显示文本
        link: `/logs/${name}/` // 生成链接
      }
    })
    .sort((a, b) => b.text.localeCompare(a.text)) // 按日期倒序排列

  return files
}
console.log(getLogItems())

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
          text:'珍品秒杀',
          link:'/help/whxps1qk/'
        },
        {
          text:'新区抢铅',
          link:'/help/uum1yqlg/'
        },
        {
          text:'日志上报',
          link:'/help/q62639g1/'
        },
        {
          text:'剑会挂机',
          link:'/help/p6qpj4l8/'
        },
      ]
    },
    {text:'更新日志',prefix:'/logs',collapsed:true,items:[
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
      },
      {
        text:'2025-01-13',
        link:'/kyekhuy9/'
      },
      {
        text:'2025-01-14',
        link:'/hg4ovnv8/'
      },
      {
        text:'2025-02-11',
        link:'/esd4r2gq/'
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
