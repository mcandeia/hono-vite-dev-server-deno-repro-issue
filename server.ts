import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  console.log("headers:", c.req.raw.headers);
  console.log(c.req.header("x-custom-header"));
  return c.text("hello vite");
});

export default app;
