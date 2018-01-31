import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { toggleLoading } from 'reducers/ui';
import { GET_POST, getPostSuccess } from 'reducers/post';
import API from 'utils/api';

export function* getPost (action) {
  yield put(toggleLoading(true));
  yield call(delay, 500);
  try {
    const payload = yield call(API.getData, 'http://jsonplaceholder.typicode.com/posts/1');
    yield put(getPostSuccess(payload));
  } catch (e) {
    console.log(e);
  }
  yield put(toggleLoading());
}

export function* watchgetPost () {
  yield takeLatest(GET_POST, getPost);
}
