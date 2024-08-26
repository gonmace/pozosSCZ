
import type { APIRoute, AstroCookieSetOptions } from 'astro';

export const POST: APIRoute = async ({ request, cookies })  => {

    // Obtener el token desde el cuerpo de la solicitud
    const { token } = await request.json();

    const options: AstroCookieSetOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Solo enviar en HTTPS en producción
        path: '/',
        sameSite: "lax",
        maxAge: 3600 * 24 // 1 hora de duración
    };
    
    // // Configurar la cookie usando las utilidades de Astro
    cookies.set('authToken', token, options);

    return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}
