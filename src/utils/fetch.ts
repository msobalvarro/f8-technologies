import axios, { AxiosError } from 'axios'
import { toast } from 'react-toastify'

export const axiosInstance = axios.create({
  baseURL: `/api`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  },
})

export const fetchData = async (endpoint: string) => {
  try {
    const response = await axiosInstance.get(endpoint)
    return response.data
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.code === 'ERR_NETWORK') {
        toast.error(`Connection refused`)
      } else {
        toast.warning(`${err?.response?.data}`)
      }
    }
  }
}