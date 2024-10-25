import { route } from "@std/http";
import allRoutes from "./routes/main.ts";

function defaultHandler(_req: Request) {
  return new Response("Not found", { status: 404 });
}

const handler = route(allRoutes, defaultHandler);

export default {
  fetch(req) {
    return handler(req);
  },
} satisfies Deno.ServeDefaultExport;
