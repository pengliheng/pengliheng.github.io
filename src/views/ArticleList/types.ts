export interface IProps {
  fetchRepositoryDetailSaga: (arg0: string) => void
  repositoryReducer: object
  userReducer: object
  fetchHomeSaga: () => void
  fetchArticleListSaga: () => void
  articleReducer: object
  homeReducer: object
}

export interface IStateProps {
  propFromReduxStore: string
  userReducer: object
}

export interface ILabel {
  color: string
  name: string
}
