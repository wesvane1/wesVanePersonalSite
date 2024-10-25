import { type Route, serveDir } from "@std/http";

const allRoutes: Route[] = [
  {
    pattern: new URLPattern({ pathname: "/" }),
    handler: async () => {
      try {
        const file = await Deno.readFile("views/index.ejs");
        return new Response(file, {
          headers: { "content-type": "text/html; charset=utf-8" },
        });
      } catch (err) {
        return new Response("Error loading page", { status: 500 });
      }
    },
  },
  {
    pattern: new URLPattern({ pathname: "/users/:id" }),
    handler: (_req, _info, params) => new Response(params?.pathname.groups.id),
  },
  {
    pattern: new URLPattern({ pathname: "/static/*" }),
    handler: (req) => serveDir(req),
  },
];

export default allRoutes