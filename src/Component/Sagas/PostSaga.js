import { call, fork, put, takeEvery } from 'redux-saga/effects';
import { fetchDataSuccess, fetchDataError } from '../Redux/ApidataSlice/ApidataSlice';
import axios from 'axios';

function* fetchData() {
  try {
    const response = yield call(axios.get, 'http://localhost:8080/post');
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataError(error));
  }
}

export function* watchFetchData() {
  yield takeEvery('posts/fetchDataRequest', fetchData);
}