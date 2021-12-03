import axios from 'axios'
import { IApiRequestHook } from '@modal/customHook.modal'

export const postapiHandler = async (apiData: IApiRequestHook): Promise<any> => {
  let responseData = null
  let isLoaded = false
  let responseError = null
  try {
    const resData: any = await axios({
      method: 'POST',
      url: apiData.apiUrl,
      data: apiData.payload,
    })
    if (resData) {
      isLoaded = true
      responseData = resData
    }
  } catch (e: any) {
    responseError = e
  }

  return { responseData, isLoaded, responseError }
}
