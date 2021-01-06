declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module '@tsign/tsign-http'
declare module 'js-cookie'

declare module '*.less' {
  const less: any
  export default less
}
