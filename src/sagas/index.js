import { fork, all } from 'redux-saga/effects';
import { watchgetPost } from './getApi';

export default function *rootSaga () {
  yield all([
    fork(watchgetPost),
  ]);
}
