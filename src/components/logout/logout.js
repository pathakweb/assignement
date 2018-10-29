import React ,{Component}from 'react'
import { connect } from 'react-redux'
import {doLogout} from '../../actions/loginActions'
const Row=({name, onClick})=>{
          return(
            <div className="nav-wrapper">
              <div className="row">
                <div className="col s12 m12">
                  <ul className="right user-profile">
                    <li className="userName">
                      <span>Welcome {name}</span>
                    </li>
                    <li>
                      <a href="#" className="dropdown-button" onClick={onClick} data-activates="dropdown1">
                        <i className="mdi mdi-power"/> Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            )
}
class LogoutPage extends Component {
  render(){
	var row =[];	
	if(this.props.userName !== undefined && this.props.userName !==""){
		row.push(<Row name={this.props.userName} onClick={this.props.logout} key="row-123445555"/>);
	}
  return(
		<div className="mainWelcome">
		{row}
		</div>
    );  
  } 
}
const mapStateToProps = (state, ownProps) => {      
    return {
      userName:(localStorage.getItem('user') ===undefined)?'':localStorage.getItem('user')
   }
}
const mapDispatchToProps=(dispatch,props)=>{
  return {
    logout:() =>  dispatch(doLogout())
  }
}
 LogoutPage = connect(mapStateToProps,mapDispatchToProps)(LogoutPage)
 export default LogoutPage

