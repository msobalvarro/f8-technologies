import axios, { AxiosError } from 'axios'
import { toast } from 'react-toastify'

export const fetchData = async (endpoint = '') => {
  try {
    const response = await axios.get<T>(`/api/${endpoint}`)
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