import { call, put, takeLatest } from 'redux-saga/effects'
import Api from '../../api'
import {
  fetchRepositoryDetail,
  fetchRepositoryList,
} from '../../redux-relate/actions/request'
import {
  FETCH_REPOSITORY_DETAIL_SAGA,
  FETCH_REPOSITORY_LIST_SAGA,
} from '../../redux-relate/constant/http'

export function* fetchRepositoryListSaga() {
  yield takeLatest(FETCH_REPOSITORY_LIST_SAGA, function*() {
    try {
      const articleList = yield call(Api.fetchRepositoryList)
      yield put(fetchRepositoryList(articleList))
    } catch (error) {
      yield put(fetchRepositoryList(error))
    }
  })
}
interface IAction {
  payload: any
}

export function* fetchRepositoryDetailSaga() {
  yield takeLatest(FETCH_REPOSITORY_DETAIL_SAGA, function*({
    payload,
  }: IAction) {
    try {
      const articleList = yield call(Api.fetchRepositoryDetail, payload)
      yield put(fetchRepositoryDetail(articleList))
    } catch (error) {
      yield put(fetchRepositoryDetail(error))
    }
  })
}
