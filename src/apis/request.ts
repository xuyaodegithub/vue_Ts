import axios from 'axios'
import qs from 'qs'
// axios.defaults.timeout=10000;//设置请求时间，超过时间报超时错位
// axios.defaults.headers={'X-Custom-Header': 'foobar'}//全局设置请求头
// instance.defaults.headers['Content-Type']='application/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=UTF-8';//全局设置请求头//表示跨域请求时是否需要使用凭证默认false
// axios.defaults.baseURL='http://test-admin-h5.olquan.cn'//设置域名
// axios.defaults.withCredentials = true // 表示跨域请求时是否需要使用凭证,默认false，一般请求携带cookie是设置为true
// })
const instance: any = axios.create({
  // timeout:10000,
  baseURL: process.env.VUE_APP_API_URL, // process.env.VUE_APP_BASEURL,
  // headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
  // validateStatus:  (status)=> {
  // 更改状态码 不怎么用
  // return status<500
  // 此时设置成功状态码是404，所以就算地址错误，报404，但依旧会显示请求成功
  // }
  withCredentials: true,
}) // 自定义axios对象
const headers = process.env.groupId
  ? {
      'X-Tsign-Service-Group': process.env.groupId,
    }
  : {}
instance.interceptors.request.use(
  (config: any) => {
    // 为自定义axios设置请求拦截器
    // console.log(config)
    // 在发送请求之前做些什么config是axios请求实例 里面包含axios各种配置项和相关属性信息
    return {
      ...config,
      headers: { ...headers },
      params: {
        ...config.params,
        _: new Date().getTime(),
      },
      paramsSerializer(params: any) {
        return qs.stringify(params)
      },
    }
  },
  (error: any) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(
  (response: any) => {
    // 为自定义axios设置响应拦截器
    // 对响应数据做点什么
    const res = response.data,
      a = ['posterEditor', 'idPhotoEdit', 'imagePhotoEdit']

    // return res
    return Promise.reject(response.data)
  },
  function(err: any) {
    // 对请求错误做些什么
    return Promise.reject(err)
  }
)
// instance.interceptors.request.eject(beforask);//移除请求拦截器方法
// instance.interceptors.response.eject(afterask);//移除响应拦截器方法
const post = (url: string, data: object) => {
  // post请求
  return instance({
    method: 'post',
    url,
    dataType: 'JSON',
    data,
  })
}
const paramspost = (url: string, data: object) => {
  // post请求  params参数
  return instance({
    method: 'post',
    url,
    dataType: 'JSON',
    params: data,
  })
}
const get = (url: string, data: any) => {
  // get请求
  return instance({
    method: 'get',
    url,
    dataType: 'JSON',
    params: data,
  })
}
const upPost = (url: string, data: any) => {
  // 图片上传请求
  return instance({
    method: 'post',
    url,
    dataType: 'JSON',
    data,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}
const paramspost2 = (url: string, data: any, file: any) => {
  // 图片上传请求
  return instance({
    method: 'post',
    url,
    dataType: 'JSON',
    params: data,
    data: file,
    headers: { 'Content-Type': 'application/octet-stream' },
  })
}

export default {
  post,
  get,
  upPost,
  paramspost,
  paramspost2,
}
