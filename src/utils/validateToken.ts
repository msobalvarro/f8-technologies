import { JwtPayload, verify, sign } from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key'

export function validateToken(authToken: string): JwtPayload | string {
  const token: string | JwtPayload = authToken.split(' ')[1]
  const decoded: JwtPayload | string = verify(token, SECRET_KEY) as JwtPayload

  return decoded
}

export function generateToken(data: object): string {
  return sign(data, SECRET_KEY, { expiresIn: '24h' })
}