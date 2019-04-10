import {
  FETCH_REPOSITORY_LIST,
  FETCH_REPOSITORY_DETAIL,
} from '../../redux-relate/constant/http'

const initialState = {
  repositoryListHttpResponse: {},
  repositoryDetailHttpResponse: {},
}
interface action {
  payload: any
  type: string
}
/**
 * @export    reducer
 * @param     {*} [state=initialState]
 * @param     {*} action
 * @returns
 */
export default function(state = initialState, action: action) {
  switch (action.type) {
    case FETCH_REPOSITORY_DETAIL:
      return Object.assign({}, state, {
        repositoryDetailHttpResponse: action.payload,
      })
    case FETCH_REPOSITORY_LIST:
      return Object.assign({}, state, {
        repositoryListHttpResponse: action.payload,
      })
    default:
      return state
  }
}
