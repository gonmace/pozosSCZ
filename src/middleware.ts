import { defineMiddleware } from "astro:middleware";

const privateRoutes = ["/mapa"];  // Asegúrate de que el nombre de la variable está correctamente escrito


export const onRequest = defineMiddleware((context, next) => {
    
    const token = context.cookies.get('authToken');
    
    if (privateRoutes.includes(context.url.pathname)) {
        if (token) {
            return next();
        } else {
            return new Response(null, {
                status: 302,
                headers: {
                    'Location': '/login'
                }
            });
        }
    }
    return next();

});

