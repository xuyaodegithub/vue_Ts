/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

const { resolve } = require('path')
const path = require('path')
const packageConfig = require('./package.json')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

// 版本号取package.json
const APP_VERSION = packageConfig.version
const APP_NAME = packageConfig.name

// 应用部署的CDN目录
const CDN_PATH = `//asset.tsign.cn/apps/${APP_NAME}/`

// 编译模式：dev test sml prod
const { MODE } = process.env

// 需要部署在nginx下的模式 不变的文件放到ngxin 变化的文件单独打包放到oss
const NGINX_MODE = ['test', 'sml', 'prod']
const IS_NGINX_MODE = NGINX_MODE.includes(MODE)

// 打包目录
const OUTPUT_DIR = 'dist'

// 获取命令⾏中占位的参数
const getArgv = arg => {
  if (process.env.VUE_APP_MODE === 'prod') {
    return ''
  }

  const findIndex = process.argv.findIndex(v => v === arg)

  if (findIndex === undefined) {
    return ''
  }

  const groupId = process.argv[findIndex + 1]

  return groupId
}

// 获取命令行中带等号的参数
const getArgvArg = () => {
  const processArgsArr = process.argv.filter(item => {
    return item.includes('=')
  })

  const tempObj = {}
  processArgsArr.forEach(item => {
    const itemArray = item.split('=')
    tempObj[itemArray[0]] = itemArray[1] || ''
  })

  return tempObj
}

if (getArgvArg() && getArgvArg().packageEnv) {
  const acceptPackageEnvEnum = ['Saas', 'Ding']
  if (!acceptPackageEnvEnum.includes(getArgvArg().packageEnv)) {
    return new Error(`packageEnv 只允许 ${JSON.stringify(acceptPackageEnvEnum)}`)
  }
}

const types = [
  {
    oneof: 'vue-modules',
    query: /module/,
  },
  {
    oneof: 'vue',
    query: /\?vue/,
  },
  {
    oneof: 'normal-modules',
    query: /\.module\.\w+$/,
  },
  {
    oneof: 'normal',
  },
]

function elementCssLoader(rule) {
  rule
    .use('vue-style-loader')
    .loader('vue-style-loader')
    .tap(() => ({
      sourceMap: false,
      shadowMode: false,
    }))
    .end()
    .use('css-loader')
    .loader('css-loader')
    .tap(() => ({
      sourceMap: false,
      importLoaders: 2,
      modules: false,

      // localIdentName: '[local]_[hash:base64:5]',
    }))
    .end()
    .end()
}

module.exports = {
  devServer: {
    port: 80,
    open: true,
    disableHostCheck: true,
    proxy: {
      // 测试环境反向代理首页地址
      '/zcms': {
        target: 'https://www.esign.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/zcms': '/zcms/',
        },
      },
    },
  },
  outputDir: OUTPUT_DIR,
  publicPath: IS_NGINX_MODE ? `${CDN_PATH}` : '/',
  assetsDir: IS_NGINX_MODE ? `${MODE}/${APP_VERSION}` : 'static',
  indexPath: IS_NGINX_MODE ? 'nginx/index.html' : 'index.html',
  productionSourceMap: false,
  css: {
    requireModuleExtension: false,
    extract: process.env.NODE_ENV !== 'development',
    sourceMap: true,
    loaderOptions: {
      css: {
        modules: {
          localIdentName: '[local]_[hash:base64:5]',
        },
      },
    },
  },
  crossorigin: 'anonymous',
  chainWebpack(config) {
    config.optimization.minimizer('terser').tap(args => {
      // 生成环境去除console.log debgger、注释等
      args[0].terserOptions.compress.drop_console = true
      args[0].terserOptions.compress.drop_debugger = true
      args[0].cache = true
      args[0].parallel = true
      args[0].sourceMap = true

      return [...args]
    })

    // 修改CopyWebpackPlugin
    config.plugin('copy').tap(args => {
      args[0][0].to = IS_NGINX_MODE ? path.resolve(__dirname, `./${OUTPUT_DIR}/nginx`) : path.resolve(__dirname, `./${OUTPUT_DIR}`)

      return args
    })

    // 修改 process.env
    config.plugin('define').tap(definitions => {
      definitions[0]['process.env'] = {
        ...definitions[0]['process.env'],
        ...{ groupId: JSON.stringify(getArgv('--groupId')) },
        ...{ packageEnv: JSON.stringify(getArgvArg()['--packageEnv']) },
      }

      return definitions
    })

    // 可视化打包依赖分析
    config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin)

    // 去除对element-ui的css modules
    const cssRule = config.module.rule('css')
    cssRule.exclude.add(resolve('./node_modules')).end()
    const elementCssRule = config.module.rule('element_css')
    elementCssRule
      .test(/\.css$/)
      .include.add(resolve('./node_modules/element-ui'))
      .end()
      .test(/\.css$/)
      .include.add(resolve('./node_modules/@esign-component/sign-h5-ui'))
      .end()
    types.forEach(({ oneof, query }) =>
      elementCssLoader(query ? elementCssRule.oneOf(oneof).resourceQuery(query) : elementCssRule.oneOf(oneof))
    )
  },
}
