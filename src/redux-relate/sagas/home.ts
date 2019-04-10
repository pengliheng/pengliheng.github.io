import { put, takeLatest, call } from 'redux-saga/effects'
import { fetchHome } from '../../redux-relate/actions/request'
import { FETCH_HOME_PAGE_SAGA } from '../../redux-relate/constant/http'
import Api from '../../api'

export function* fetchHomeSaga() {
  yield takeLatest(FETCH_HOME_PAGE_SAGA, function*() {
    try {
      const home = yield call(Api.fetchHome)
      yield put(fetchHome(home))
    } catch (error) {
      yield put(fetchHome(error))
    }
  })
}
