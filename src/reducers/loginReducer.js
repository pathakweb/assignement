const login=(state={},action) =>{
switch(action.type){
	case 'LOGIN_SUCCESS':
	return {
		...state,
		userDetails:action.data
	}
	default:
		return state;
  }
}
export default login