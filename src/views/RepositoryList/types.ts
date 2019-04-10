export interface IProps {
  fetchRepositoryListSaga: () => void
  userReducer: object
  repositoryReducer: object
}

export interface IStateProps {
  propFromReduxStore: string
  userReducer: object
}
