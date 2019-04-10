export interface IProps {
  fetchRepositoryListSaga: () => void
  userReducer: object
  repositoryReducer: object
  fetchUserSaga: () => void
}

export interface IStateProps {
  propFromReduxStore: string
  userReducer: object
}

// export interface IDispatchProps {
//   fetchUserSaga: () => void
// }
