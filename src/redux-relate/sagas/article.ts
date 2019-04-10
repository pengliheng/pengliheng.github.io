import { fetchArticleList, fetchArticleDetail } from '../actions/request'
import { put, takeLatest, call } from 'redux-saga/effects'
import {
  FETCH_ARTICLE_LIST_SAGA,
  FETCH_ARTICLE_DETAIL_SAGA,
} from '../constant/http'
import Api from '../../api/index'

export function* fetchArticleListSaga() {
  yield takeLatest(FETCH_ARTICLE_LIST_SAGA, function*() {
    try {
      const articleList = yield call(Api.fetchArticleList)
      yield put(fetchArticleList(articleList))
    } catch (error) {
      yield put(fetchArticleList(error))
    }
  })
}

export function* fetchArticleDetailSaga() {
  yield takeLatest(FETCH_ARTICLE_DETAIL_SAGA, function*({ payload }: any) {
    try {
      const res = yield call(Api.fetchArticleDetail, payload)
      yield put(fetchArticleDetail(res.data.search.edges[0].node))
    } catch (error) {
      yield put(fetchArticleDetail(error))
    }
  })
}
