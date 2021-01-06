/**
 * Created by Yan on 2019-06-01
 **/
// @ts-ignore
import https from "./request";

/**
 * 批量下载
 **/
export const getMattedImageMultiple:any = (data: any) => {
  return https.post("/EnterprisePublicity/GetPersonInCharge", data);
};
