export interface IProps {
  fetchRepositoryDetailSaga: (arg0: string) => void
  repositoryReducer: object
  userReducer: object
  fetchHomeSaga: () => void
  homeReducer: object
}

export interface IStateProps {
  propFromReduxStore: string
  userReducer: object
}

export interface IDispatchProps {
  fetchUserSaga: () => void
}
