import { defineMiddleware } from "astro:middleware";

const privateRoutes = ["/mapa"];  // Asegúrate de que el nombre de la variable está correctamente escrito


export const onRequest = defineMiddleware((context, next) => {
    
    const token = context.cookies.get('authToken');
    console.log('Token:', token);
    
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


// const checkLocalAuth = (authHeaders: string, next: MiddlewareNext) => {
//     if (authHeaders) {
//         const [type, credentials] = authHeaders.split(' ');
//         const [username, password] = atob(credentials).split(':');
        
//         if (username === 'admin' && password === 'admin') {
//             return next();
//         }
//     }

//     return new Response("Auth Necesaria", {
//         status: 401,
//         headers: {
//             'WWW-Authenticate': 'Basic real="Secure Area"'
//         }
//     });

// }


function getCookie(req: Request, name: string) {
    const cookies = req.headers.get('cookie') || '';
    const cookiesArray = cookies.split(';').map(cookie => cookie.trim());
    const cookie = cookiesArray.find(cookie => cookie.startsWith(`${name}=`));
    return cookie ? cookie.split('=')[1] : null;
}


        // return new Response(null, {
        //     status: 302,
        //     headers: {
        //         'Location': '/login'
        //     }
        // });

