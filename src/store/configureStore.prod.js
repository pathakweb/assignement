import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {rootReducer} from '../reducers/'
import { browserHistory} from 'react-router'
import { routerMiddleware} from 'react-router-redux'
const middleware = routerMiddleware(browserHistory)
const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk,middleware)
    )
  )
 return store
}
export default configureStore

