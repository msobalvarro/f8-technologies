import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = { login: true }
    res.status(200).json(response)
  } catch (error) {
    res.status(500).send(error)
  }
}
