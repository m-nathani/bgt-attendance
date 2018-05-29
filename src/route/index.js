import compose from 'koa-compose';

// Import all routes
import rank from './rank';
import event from './event'
import memberGroup from './memberGroup'
import ziyarat from './ziyarat'
import member from './member'

export default () => compose([
  rank(),
  event(),
  memberGroup(),
  ziyarat(),
  member(),
]);
