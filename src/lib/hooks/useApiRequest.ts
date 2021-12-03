/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import axios from 'axios'
import { IApiRequestHook } from '@modal/customHook.modal'

export const usePostApi = (apiData: IApiRequestHook) => {
  const [responseData, setData] = useState<any>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [responseError, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const obj = apiData.payload
        if (
          obj &&
          Object.keys(obj).length === 0 &&
          Object.getPrototypeOf(obj) === Object.prototype
        ) {
          const resData: any = await axios({
            method: 'POST',
            url: apiData.apiUrl,
            data: apiData.payload,
          })
          if (resData) {
            setIsLoaded(true)
            setData(resData)
          }
        }
      } catch (e: any) {
        setError(e)
      }
    }
    fetchData()
  }, [apiData.apiUrl])

  return { responseData, isLoaded, responseError }
}

export const useGetApi = (apiData: IApiRequestHook) => {
  const [responseData, setData] = useState<any>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [responseError, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resData: any = await axios({
          method: 'GET',
          url: apiData.apiUrl,
        })
        if (resData) {
          setIsLoaded(true)
          setData(resData)
        }
      } catch (e: any) {
        setError(e)
      }
    }
    fetchData()
  }, [apiData.apiUrl])

  return { responseData, isLoaded, responseError }
}

export const useDeleteApi = (apiData: IApiRequestHook) => {
  const [responseData, setData] = useState<any>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [responseError, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resData: any = await axios({
          method: 'DELETE',
          url: apiData.apiUrl,
        })
        if (resData) {
          setIsLoaded(true)
          setData(resData)
        }
      } catch (e: any) {
        setError(e)
      }
    }
    fetchData()
  }, [apiData.apiUrl])

  return { responseData, isLoaded, responseError }
}
