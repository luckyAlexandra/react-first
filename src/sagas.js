import { delay } from 'redux-saga'
import { takeEvery, call, put } from 'redux-saga/effects'
import * as actions from './store/actions'

function* test(action) {
  console.log('------------>', action)
  const {time, color} = action
  yield call(delay, time*1000) //返回一个延迟 1 秒再 resolve 的 Promise, 阻塞 Generator
  yield put(actions.changeBg(color)) //指示 middleware 发起一个 action
  yield console.log('------------>done')  
}

function* helloSaga() {
  console.log('------>helloSaga')
  yield takeEvery(actions.DELAY_CHANGE, test)
}

export default helloSaga