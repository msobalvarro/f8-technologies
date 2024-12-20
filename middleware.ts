import { validateToken } from '@/utils/validateToken'
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const authHeader = request.headers.get('Authorization')
  console.log(authHeader)
  const auth = validateToken(`${authHeader}`)
  if (!authHeader) return new NextResponse('Unauthorized', { status: 401 })

  if (auth) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (request as any).user = auth;
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/api/products/:path*', // Subrutas protegidas
    // '/api/products',        // Protegemos la raíz...
    // '!/api/products',       // ...excepto para GET (excluido por lógica interna)
  ]
}
