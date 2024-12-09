import { validateToken } from '@/utils/validateToken'
import { NextRequest, NextResponse } from 'next/server'

// Este middleware se ejecutará antes de que la solicitud llegue a la ruta
export function middleware(request: NextRequest) {
  // Obtener el valor del encabezado Authorization
  const authHeader = request.headers.get('Authorization')

  const auth = validateToken(`${authHeader}`)

  // Si no existe el encabezado Authorization, devolver un error 401
  if (!authHeader) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  if (auth) {
    // Añadir los datos decodificados al request para ser usado en otras APIs
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (request as any).user = auth;
  }

  // Si el token es válido, continuar con la solicitud
  return NextResponse.next()
}