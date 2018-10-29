import React, { Component} from 'react'
import {doLogin} from '../../actions/loginActions'
import { connect } from 'react-redux'
import LoginPage from '../../components/Login/LoginPanel'
class CustomerPortalLogin extends Component {
  constructor(props) {
    super(props) 
 }
 render() {
   return (
    <div className ="login-page">
        <div className="login-section">
        <div className="row login-page">
          <div className="col s12 m8 l5 login-form">
            <h1 className="center-align">Login to the Planet Portal</h1>
            <LoginPage handleSubmit = {this.props.onLogin}/>
           </div>
          </div>
          </div>          
      </div>
      
    )
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {  
   var loginParam=(values)=>{
        dispatch(doLogin(values));
  }  
  return {
   onLogin:loginParam
  }
}
export default connect(null,mapDispatchToProps)(CustomerPortalLogin)
