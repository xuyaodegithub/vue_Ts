const fs = require('fs')
const path = require('path')
const glob = require('glob')

const srcToInterFaceName = src => {
  return path
    .basename(src)
    .split('.')[0]
    .toUpperCase()
}

const generate = (src, classArray) => {
  const interFaceName = srcToInterFaceName(src)
  const interFaceContent = classArray
    .map(key => {
      const indent = '  '
      const newKey = key.replace('.', '').replace('{', '')

      return `${indent}${newKey}: string`
    })
    .join('\n')

  return `export interface ${interFaceName} {
${interFaceContent}
}
declare const styles: ${interFaceName}

export default styles
`
}

const writeFile = (filename, content) => {
  if (fs.existsSync(filename)) {
    const current = fs.readFileSync(filename, 'utf-8')
    if (current !== content) {
      fs.writeFileSync(filename, content)
    }
  }
  fs.writeFileSync(filename, content)
}

glob('src/**/*.less', {}, (error, res) => {
  if (error) console.log(error)
  res.forEach(f => {
    const lessContent = fs.readFileSync(f, 'utf-8').replace(/(\s*)\{/g, '{')
    const classArray = lessContent.match(/\.(\w*)\{/g)
    const result = generate(f, [...new Set(classArray)])
    writeFile(`${f}.d.ts`, result)
  })
})
