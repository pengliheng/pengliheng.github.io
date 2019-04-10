import {
  FETCH_ARTICLE_LIST,
  FETCH_ARTICLE_DETAIL,
} from '../../redux-relate/constant/http'

const initialState = {
  articleListHttpResponse: {},
  articleDetailHttpResponse: {},
}

interface action {
  payload: any
  type: string
}
export default function(state = initialState, action: action) {
  switch (action.type) {
    case FETCH_ARTICLE_DETAIL:
      return Object.assign({}, state, {
        articleDetailHttpResponse: action.payload,
      })
    case FETCH_ARTICLE_LIST:
      return Object.assign({}, state, {
        articleListHttpResponse: action.payload,
      })
    default:
      return state
  }
}
