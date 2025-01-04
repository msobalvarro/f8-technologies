import { jwtVerify, SignJWT } from 'jose'
import { NextRequest } from 'next/server'

export async function verifyHeaderToken(request: NextRequest) {
  const authHeader = request.headers.get('Authorization')
  if (!authHeader) throw new Error('No token provided')
  const auth = await asyncvalidateToken(`${authHeader}`)

  if (auth) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (request as any).user = auth
  }
}

export async function asyncvalidateToken(authToken: string) {
  const token: string = authToken.split(' ')[1]
  const secret = new TextEncoder().encode(process.env.JWT_SECRET?.trim())
  const data = await jwtVerify(token, secret, {
    algorithms: ['HS256']
  })

  return data.payload
}

export async function generateToken(data: object) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET?.trim())
  const token = await new SignJWT({ ...data })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('100h')
    .sign(secret)

  return token
}

// export const newSha256 = (data: string): string => createHash('sha256').update(data).digest('hex')
export const newSha256 = (data: string): string => data
// export const newSha256 = async (data: string): Promise<string> => await argon2.hash(data)