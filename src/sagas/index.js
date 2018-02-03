import { fork, all } from 'redux-saga/effects';
import { watchgetFishKind } from './getApi';

export default function *rootSaga () {
  yield all([
    fork(watchgetFishKind),
  ]);
}
