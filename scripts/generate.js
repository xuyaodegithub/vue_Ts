const fs = require('fs')
const args = process.argv.slice(2)

const toFirstUpperCase = str => str.replace(/^\S/, s => s.toUpperCase())
const toFirstLowerCase = str => str.replace(/^\S/, s => s.toLowerCase())
const toLine = str => str.replace(/([A-Z])/g, '-$1').toLowerCase()
const createComponent = filename => {
  if (fs.existsSync(`./src/components/${filename}`)) {
    console.log('当前文件夹已存在，请重新命名')

    return
  }

  fs.mkdirSync(`./src/components/${filename}`)

  const fileContent = `import { Vue, Component } from 'vue-property-decorator'
@Component({})
class ${filename} extends Vue {
  protected render(h: any) {
    return <div>新建组件</div>
  }
}

export default ${filename}
`
  fs.writeFileSync(`./src/components/${filename}/index.tsx`, fileContent)
}

const createPage = filename => {
  if (fs.existsSync(`./src/views/${filename}`)) {
    console.log('当前页面已存在，请重新命名')

    return
  }
  fs.mkdirSync(`./src/views/${filename}`)
  const file = `import { Vue, Component } from 'vue-property-decorator'
import styles from './${filename}.less'
@Component({})
class ${filename} extends Vue {
  protected render(h: any) {
    return <div class={styles.${toFirstLowerCase(filename)}}>新建页面</div>
  }
}

export default ${filename}
`
  const less = `.${toLine(toFirstLowerCase(filename))} {}`
  fs.writeFileSync(`./src/views/${filename}/index.tsx`, file)
  fs.writeFileSync(`./src/views/${filename}/${filename}.less`, less)
}

// createPage('MyPage')
const app = () => {
  if (!args.some(item => /-p|-c/.test(item))) {
    console.log('请输入操作指令，使用"-c"去创建组件，"-p"去创建页面')

    return
  }
  if (args.length <= 1 || args.length > 3 || (args.length === 2 && args.sort().join('') === '-c-p')) {
    console.log('请输入完整的指令')

    return
  }
  const filename = args.find(item => !/-p|-c/.test(item))

  if (args.includes('-p')) {
    createPage(toFirstUpperCase(filename))
  }
  if (args.includes('-c')) {
    createComponent(toFirstUpperCase(filename))
  }
}

app()
