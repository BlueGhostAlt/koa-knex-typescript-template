import Router from "koa-router";

import greetingsRouter from "./greetings/routes/";

const apiRouter = new Router({ prefix: "/api" });

apiRouter.use(greetingsRouter);

export default apiRouter.routes();
