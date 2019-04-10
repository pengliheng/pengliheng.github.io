import Api from '../../api'
import { put, takeLatest, call } from 'redux-saga/effects'
import { fetchUser } from '../../redux-relate/actions/request'
import { FETCH_USER_INFO_SAGA } from '../../redux-relate/constant/http'

export function* fetchUserSaga() {
  yield takeLatest(FETCH_USER_INFO_SAGA, function*() {
    try {
      const users = yield call(Api.fetchUser)
      yield put(fetchUser(users))
    } catch (error) {
      yield put(fetchUser(error))
    }
  })
}
