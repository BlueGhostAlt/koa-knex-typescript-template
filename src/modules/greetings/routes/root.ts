import Router from "koa-router";

import getAllGreetings from "../actions/getAllGreetings";

const router = new Router();

router.get("/", async ctx => {
    const greetings = await getAllGreetings();

    return (ctx.body = greetings);
});

export default router.routes();
