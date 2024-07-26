import { React, FC } from 'react'

const Button: FC<any> = ({ children }) => {
	return (
		<button className='bg-primary text-white p-2 rounded-lg active:scale-95 duration-300'>{children}</button>
	)
}

export default Button