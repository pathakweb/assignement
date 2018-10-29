import {Input} from 'react-materialize'
import React from 'react'
const renderTextField = ({input,placeHolder, readonly,onKeyUp}) => {	
	 return(<input type="text" autoComplete="off" placeholder={placeHolder}  {...input} onKeyUp={onKeyUp}/>

	)
	
}

const renderPasswordField = ({input,placeHolder}) => {

	 return(<input type="password" placeholder={placeHolder}  {...input} />

	)
	
}
const renderSelect = ({input,className,s,l,m,children}) => (
	<Input type='select' s={s} m={m} l={l} className={className} children={children}  {...input} onChange={input.onChange}/>
	)

module.exports = {
	renderTextField,
	renderPasswordField,
	renderSelect
}