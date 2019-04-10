import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from '../reducers/index'
import rootSaga from '../sagas/index'

const sagaMiddleware = createSagaMiddleware()
const logger = createLogger()
export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger)),
)

sagaMiddleware.run(rootSaga)
