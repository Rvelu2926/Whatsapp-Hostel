export interface IApiRequestHook {
  apiUrl: string
  payload?: any
  options?: {
    baseUrl: any
  }
}
