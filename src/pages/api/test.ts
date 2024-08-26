import type { APIRoute  } from 'astro';

export const GET: APIRoute = async ({ params, request }) => {
    console.log("Request received at /api/test");
    

    return new Response(JSON.stringify({ message: "Test route working" }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}
