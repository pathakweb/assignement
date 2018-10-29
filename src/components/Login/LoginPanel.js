import React ,{Component}from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import {renderTextField,renderPasswordField} from '../form-elements/FormElements'
let LoginPage = ({handleSubmit}) => {
   return (          
           <Login handleSubmit={handleSubmit} />
  ) 
}
class Login extends Component {
  render(){
         return(
            <div className="row">
              <div className="col s12 m12 l12">
                <LoginForm onSubmit= {this.props.handleSubmit}/>
             </div>
            </div>
    );  
  } 
}
let LoginForm=props => {
  const{handleSubmit}=props;
    return(
    <div>
  <form onSubmit={handleSubmit} className="login-wrapper">
        <div className="row mb10">
            <div className="col s12 m12">
              <div className="input-field">
                <Field component={renderTextField} type="text" id="userName" name="userName" placeholder="User Name" autoComplete="off"/>
                <label htmlFor="userName" className="active">User Name</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m12">
              <div className="input-field">
              <Field component={renderPasswordField} type="password" id="loginPassword" name="loginPassword" placeholder="Password"/>
                <label htmlFor="loginPassword" className="active">Password</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m12 right-align forget-btn-wrap">
              <button type="button" className="btn btn-transparent"></button>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m12">
              <button type="submit" className="btn btn-block btn-login">Login</button>
            </div>
          </div>
    </form>
  </div>
   )
}
LoginForm= reduxForm({
  form: 'loginForm' 
})(LoginForm)
 export default LoginPage
