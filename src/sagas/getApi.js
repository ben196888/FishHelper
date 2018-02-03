import { call, put, takeLatest } from 'redux-saga/effects';
import { toggleLoading } from 'reducers/ui';
import { GET_FISHKIND, getFishKindSuccess } from 'reducers/fishkind';
import { GET_FISHINFO, getFishInfoSuccess } from 'reducers/fishInfo';
import API from 'utils/api';

export function* getFishDetail (action) {
  yield put(toggleLoading(true));
  try {
    const payload = yield call(API.getData, `/api/fishInfo/${action.payload}`);
    yield put(getFishInfoSuccess(payload));
  } catch (e) {
    console.log(e);
  }
  yield put(toggleLoading());
}

export function* getFishKind (action) {
  yield put(toggleLoading(true));
  try {
    const payload = yield call(API.getData, '/api/fishKind');
    yield put(getFishKindSuccess(payload));
  } catch (e) {
    console.log(e);
  }
  yield put(toggleLoading());
}

export function* watchgetFishKind () {
  yield takeLatest(GET_FISHKIND, getFishKind);
}

export function* watchgetFishInfo () {
  yield takeLatest(GET_FISHINFO, getFishDetail);
}
