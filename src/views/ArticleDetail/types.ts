export interface IProps {
  articleReducer: object
  userReducer: object
  fetchArticleDetailSaga: any
}

export interface IStateProps {
  propFromReduxStore: string
  userReducer: object
}

export interface ILabel {
  color: string
  name: string
}
