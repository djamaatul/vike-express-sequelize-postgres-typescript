import React, { useContext } from 'react'
import Navbar from '../components/Navbar/+client'
import { GlobalContext } from '../contexts/Global'

function Layout({ children }) {
	const { isLogin } = useContext(GlobalContext);
	return (
		<div>
			{isLogin && (
				<Navbar />
			)}
			{children}
		</div>
	)
}

export default Layout