import { FETCH_HOME_PAGE } from '../../redux-relate/constant/http'

const initialState = {
  res: {},
}

/**
 *
 *
 * @export    reducer
 * @param     {*} [state=initialState]
 * @param     {*} action
 * @returns
 */
export default function(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_HOME_PAGE:
      return Object.assign({}, state, {
        res: action.payload,
      })
    default:
      return state
  }
}
