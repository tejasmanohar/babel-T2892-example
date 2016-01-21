import Koa from 'koa'
import fn from './fn'
import Router from 'koa-router'

const app = new Koa()
const router = new Router()

router.get('/:id', fn())

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)
