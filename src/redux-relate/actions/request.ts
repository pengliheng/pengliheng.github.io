import {
  FETCH_ARTICLE_DETAIL,
  FETCH_ARTICLE_DETAIL_SAGA,
  FETCH_ARTICLE_LIST,
  FETCH_ARTICLE_LIST_SAGA,
  FETCH_HOME_PAGE,
  FETCH_HOME_PAGE_SAGA,
  FETCH_REPOSITORY_DETAIL,
  FETCH_REPOSITORY_DETAIL_SAGA,
  FETCH_REPOSITORY_LIST,
  FETCH_REPOSITORY_LIST_SAGA,
  FETCH_USER_INFO,
  FETCH_USER_INFO_SAGA,
} from '../../redux-relate/constant/http'

// home
export const fetchHome = (res: any) => ({
  payload: res,
  type: FETCH_HOME_PAGE,
})

export const fetchHomeSaga = (res: any) => ({
  payload: res,
  type: FETCH_HOME_PAGE_SAGA,
})

// user
export const fetchUser = (res: any) => ({
  payload: res,
  type: FETCH_USER_INFO,
})

export const fetchUserSaga = (res: any) => ({
  payload: res,
  type: FETCH_USER_INFO_SAGA,
})

// articel list
export const fetchArticleList = (res: any) => ({
  payload: res,
  type: FETCH_ARTICLE_LIST,
})

export const fetchArticleListSaga = () => ({
  type: FETCH_ARTICLE_LIST_SAGA,
})

// articel detail
export const fetchArticleDetail = (res: any) => ({
  payload: res,
  type: FETCH_ARTICLE_DETAIL,
})

export const fetchArticleDetailSaga = (res: any) => ({
  payload: res,
  type: FETCH_ARTICLE_DETAIL_SAGA,
})

// repository list
export const fetchRepositoryList = (res: any) => ({
  payload: res,
  type: FETCH_REPOSITORY_LIST,
})

export const fetchRepositoryListSaga = (res: any) => ({
  payload: res,
  type: FETCH_REPOSITORY_LIST_SAGA,
})

// repository detail
export const fetchRepositoryDetail = (keyWord: string) => ({
  payload: keyWord,
  type: FETCH_REPOSITORY_DETAIL,
})

export const fetchRepositoryDetailSaga = (res: any) => ({
  payload: res,
  type: FETCH_REPOSITORY_DETAIL_SAGA,
})
