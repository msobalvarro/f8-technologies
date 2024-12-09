import { NextApiRequest, NextApiResponse } from 'next'
import { JwtPayload, verify } from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key'

export function validateToken(handler: (req: NextApiRequest, res: NextApiResponse) => void) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new Error('Token is required')
    }

    const token: string | JwtPayload = authHeader.split(' ')[1]

    try {
      const decoded: JwtPayload | string = verify(token, SECRET_KEY) as JwtPayload

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (req as any).user = decoded

      // Llama al handler original
      return handler(req, res)
    } catch (error) {
      return res.status(401).json(error)
    }
  }
}