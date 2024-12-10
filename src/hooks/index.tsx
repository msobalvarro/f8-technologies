import { REGEX_NUM, verifyRegex } from '@/herlpers'
import Validator from 'validator'

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
