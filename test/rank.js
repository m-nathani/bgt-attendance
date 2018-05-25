import test from 'ava';
import * as service from '../src/service/rank';

test('should return users', t => {
  const users = service.getRanks();

  t.is(users.length, 4);
});

test('should return valid names', t => {
  const [ava, boyd, raylan, winona] = service.getRanks();

  t.not(ava, undefined);
  t.not(boyd, undefined);
  t.not(raylan, undefined);
  t.not(winona, undefined);
});