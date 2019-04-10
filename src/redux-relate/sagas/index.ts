import { all } from 'redux-saga/effects'
import { fetchArticleDetailSaga, fetchArticleListSaga } from './article'
import { fetchHomeSaga } from './home'
import {
  fetchRepositoryDetailSaga,
  fetchRepositoryListSaga,
} from './repository'
import { fetchUserSaga } from './user'

export default function*() {
  yield all([
    fetchUserSaga(),
    fetchHomeSaga(),
    fetchArticleListSaga(),
    fetchArticleDetailSaga(),
    fetchRepositoryListSaga(),
    fetchRepositoryDetailSaga(),
  ])
}
