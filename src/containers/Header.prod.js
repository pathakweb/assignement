import React, { Component } from 'react'
import LogoutPage from '../components/logout/logout'
class Header extends Component{
  constructor(props) {
    super(props)
  }
  render() {
  return (
  <header>
            <nav>
                <div className="nav-wrapper">
                    <div className="row">
                        <div className="col s12 m12">
                            <LogoutPage/>       
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
 }
}

export default Header;
