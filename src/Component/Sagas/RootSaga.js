import {all} from 'redux-saga/effects'
import { watchFetchData } from './PostSaga'

function * RootSaga(){
  yield all([
    watchFetchData()

  ])
}
export default RootSaga