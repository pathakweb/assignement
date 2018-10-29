import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route,IndexRoute } from 'react-router'
import CustomerPortalLogin from '../containers/Login/CustomerPortalLoginContainer'
import MainContainer from './MainContainer'
import PlanetListing from  '../components/PlanetListing'
const Root = ({ store, history }) => (
  <Provider store={store}> 
   <div> 
   <Router history={history}>
      <Route path="/" component={MainContainer}>
        <IndexRoute component={CustomerPortalLogin} />
          <Route path="login" component={CustomerPortalLogin}/>
          <Route path="show-planet" component={PlanetListing}/>
      </Route>
    </Router>
    
    </div>
    </Provider>
 )

export default Root
