export interface IProps {
  fetchRepositoryDetailSaga: (arg0: string) => void
  repositoryReducer: object
  userReducer: object
}

export interface IStateProps {
  propFromReduxStore: string
  userReducer: object
}
