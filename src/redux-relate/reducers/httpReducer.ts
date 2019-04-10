import {
  FETCH_PENDING,
  FETCH_RESOLVE,
  FETCH_REJECT,
} from '../../redux-relate/constant/http'

const initialState = {
  httpStatus: FETCH_RESOLVE,
  message: '',
}
interface action {
  payload: any
  type: string
}
/**
 *
 *
 * @export    reducer
 * @param     {*} [state=initialState]
 * @param     {*} action
 * @returns
 */
export default function(state = initialState, action: action) {
  switch (action.type) {
    case FETCH_REJECT:
      return {
        httpStatus: FETCH_REJECT,
        message: action.payload,
      }
    case FETCH_PENDING:
      return {
        httpStatus: FETCH_PENDING,
        message: '',
      }
    case FETCH_RESOLVE:
      return {
        httpStatus: FETCH_RESOLVE,
        message: '',
      }
    default:
      return state
  }
}
