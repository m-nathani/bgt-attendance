import compose from 'koa-compose';

// Import all routes
import rank from './rank';

export default () => compose([
  rank(),
]);
