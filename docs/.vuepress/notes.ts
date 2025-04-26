import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter' // 用于解析 frontmatter

const getLogItems = () => {
  const logsDir = path.resolve(__dirname, '../notes/logs')
  const files = fs.readdirSync(logsDir)
    .filter(file => file.endsWith('.md')) // 只获取 markdown 文件
    .map(file => {
      const name = path.basename(file, '.md')
      const filePath = path.join(logsDir, file)
      const content = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(content) // 解析 frontmatter
      return {
        text: name, // 文件名作为显示文本
        link: data.permalink ? data.permalink : `/logs/${name}/` // 生成链接
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
      text:'许愿领好礼',prefix:'/wish/',collapsed:true,
      items:[
        {
          text:'下载软件',
          link:'/wish/zl83pxfn/',
        },
        {
          text:'开始使用',
          link:'/wish/uyueasx9/',
        },
        {
          text:'做任务',
          link:'/wish/7jh8tbf9/',
        },
        {
          text:'捡星星',
          link:'/wish/6rl2v7cd/',
        },
        {
          text:'发射星星',
          link:'/wish/2stwe2is/',
        },
        {
          text:'找19.9商品',
          link:'/wish/eem2vvlw/',
        },
        {
          text:'重置激活码',
          link:'/wish/95quqflo/',
        },
        {
          text:'其它通用捡',
          link:'/wish/uxy9z2dm/',
        }
      ]
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
          text:'重置激活码',
          link:'/help/l1z7gwty/'
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
        {
          text:'日常更新重启时机',
          link:'/help/lyf5g6va/'
        },
      ]
    },
    {text:'更新日志',prefix:'/logs',collapsed:true,items:getLogItems()},
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
