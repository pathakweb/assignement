import {push} from 'react-router-redux'
import {notify} from '../components/NotificationWidget'
import {hashHistory} from 'react-router'
export function doLogin(values) {
    return (dispatch, getState) => {
              
       return fetch('https://swapi.co/api/people/')
        .then(response => {
            if (!response.ok) {
                notify.createShowQueue()("failure", "Invalid Username");
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(user => {
            let apiUsersDetail= user.results;
            let filteredUserDetail = apiUsersDetail.filter(function(user) {
                return (user.name===values.userName && user.birth_year===values.loginPassword)
            });
            if (filteredUserDetail.length===undefined || filteredUserDetail.length==0){
                notify.createShowQueue()("failure", "Invalid Username or Password");
                return false;
            }
            if (filteredUserDetail.length ) {
                dispatch({type:'LOGIN_SUCCESS',data:filteredUserDetail})
                localStorage.setItem('user', values.userName);
            }
            notify.createShowQueue()("success", "Logged In Successfully");
            hashHistory.push('/show-planet');
        });
    }
}
export function doLogout() {
    return (dispatch, getState) => {
        localStorage.setItem('user', '');
        notify.createShowQueue()("success", "Logged Out Successfully");               
        hashHistory.push('/')
  }
}
