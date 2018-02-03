import { fork, all } from 'redux-saga/effects';
import { watchgetFishKind, watchgetFishInfo } from './getApi';

export default function *rootSaga () {
  yield all([
    fork(watchgetFishKind),
    fork(watchgetFishInfo),
  ]);
}
