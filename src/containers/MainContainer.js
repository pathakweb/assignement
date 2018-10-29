import React, { Component } from 'react'
import NotificationWidget from '../components/NotificationWidget'
import Header from './Header'
class MainContainer extends Component {
  constructor(props) {
    super(props) 
  }
  render() {
        return (
                <div>                 
                  <Header/>
                  <main className="login-section">
                    {this.props.children}                      
                   </main>
                 <NotificationWidget/>
                  </div>
               )
  }
}
export default MainContainer
