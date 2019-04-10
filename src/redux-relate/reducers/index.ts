import { combineReducers } from 'redux'
// 负责将 actions 中的行为具体实现

import homeReducer from './homeReducer'
import userReducer from './userReducer'
import httpReducer from './httpReducer'
import articleReducer from './articleReducer'
import repositoryReducer from './repositoryReducer'

export default combineReducers({
  homeReducer,
  userReducer,
  httpReducer,
  articleReducer,
  repositoryReducer,
})
