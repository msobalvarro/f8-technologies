'use client'

import { REGEX_NUM, verifyRegex } from '@/herlpers'
import { AxiosError } from 'axios'
import { useState, useCallback, useEffect } from 'react'
import { toast } from 'react-toastify'
import { PropsUseAxios } from '@/utils/interfaces'
import Validator from 'validator'
import axios from 'axios'

export const useValidation = () => {
  const validatePhoneNumber = (value: string) =>
    (verifyRegex(REGEX_NUM, value) && value.length <= 10)

  const validateNumber = (value: string) => !isNaN(Number(value) * 0)

  const validatePhoneNumberLength = (value: string) => value.length === 10

  const validateName = (value: string) => value.length <= 60

  const validateEmail = (value: string) => Validator.isEmail(value)

  return {
    validatePhoneNumber,
    validateName,
    validateEmail,
    validatePhoneNumberLength,
    validateNumber
  }
}


export const fetcher = async (...args: [RequestInfo, RequestInit?]) => {
  const response = await fetch(...args)
  return response.json()
}

export const useAxios = <T = unknown>({ endpoint }: PropsUseAxios) => {
  const [data, setData] = useState<T | null>(null)
  const [status, setStatus] = useState<number | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchData = useCallback(async () => {
    setLoading(true)
    setError(null)
    setStatus(null)

    try {
      const response = await axios.get<T>(`/api/${endpoint}`)

      setStatus(response.status)
      setData(response?.data)
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.code === 'ERR_NETWORK') {
          toast.error(`Connection refused`)
        } else {
          toast.warning(`${err?.response?.data}`)
        }

        setError(String(err?.response?.data))
      }
    } finally {
      setLoading(false)
    }
  }, [endpoint])

  useEffect(() => {
    fetchData()
  })

  return { data, loading, error, status, refetch: fetchData }
}
