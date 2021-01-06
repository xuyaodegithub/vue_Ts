/**
 * Created by Yan on 2019-06-01
 **/
import https from './request'

/**
 * 批量下载
 **/
export const getMattedImageMultiple: any = (data: any) => {
  return https.post('/EnterprisePublicity/GetPersonInCharge', data)
}
export const getMattedImageMultiple3: any = (data: any) => {
  return https.post('/EnterprisePublicity/GetPersonInCharge', data)
}
