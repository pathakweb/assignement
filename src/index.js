import {render} from 'react-dom'
import React from 'react'
import { hashHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import {setUserData} from './actions/loginActions'
const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)
//store.dispatch(setUserData())
render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)
     

