import Router from 'koa-router';
import Errors from 'boom';
import compose from 'koa-compose';

import * as Ctrl from '../controller/rank';

const router = new Router({
  prefix: '/rank',
});

router.get('/', Ctrl.get);
router.post('/', Ctrl.post);
router.put('/:id', Ctrl.put);
router.del('/:id', Ctrl.del);


const routes = router.routes();
const allowedMethods = router.allowedMethods({
  throw: true,
  notImplemented: () => new Errors.notImplemented(),
  methodNotAllowed: () => new Errors.methodNotAllowed(),
});

export default () => compose([
  routes,
  allowedMethods,
]);
