import { asyncvalidateToken } from '@/utils/validateToken'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  try {
    const authHeader = request.headers.get('Authorization')
    if (!authHeader) throw new Error('No token provided')

      // console.log(auth)

    const auth = await asyncvalidateToken(`${authHeader}`)

    // if (auth) {
    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   (request as any).user = auth;
    // }

    return NextResponse.next()

  } catch (error) {
    console.log(error)
    return new NextResponse(`Unauthorized: ${error}`, { status: 401 })
  }

}

export const config = {
  matcher: [
    // '/api/products/:path*', // Subrutas protegidas
    '/api/message',        // Protegemos la raíz...
    // '!/api/products',       // ...excepto para GET (excluido por lógica interna)
  ]
}
