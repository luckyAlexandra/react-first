import { delay } from 'redux-saga'
import { takeEvery, call, put } from 'redux-saga/effects'
import * as actions from './store/actions'

function* test(action) {
  console.log('------------>', action)
  const {time, color} = action
  yield call(delay, time*1000)
  yield put(actions.changeBg(color))
  yield console.log('------------>done')  
}

function* helloSaga() {
  console.log('------>helloSaga')
  yield takeEvery(actions.DELAY_CHANGE, test)
}

export default helloSaga