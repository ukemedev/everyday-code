import { createMiddleware } from "hono/factory";

export const requireCreditsBalance = createMiddleware(async (c, next) => {
  await next();
});
