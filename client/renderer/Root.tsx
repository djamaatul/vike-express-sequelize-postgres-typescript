import React from 'react'
import GlobalContextProvider from '../contexts/Global'
import AlertProvider from '../contexts/Alert'
import Layout from './Layout'

function Root({ children }) {
	return (
		<GlobalContextProvider>
			<AlertProvider>
				<Layout>
					{children}
				</Layout>
			</AlertProvider>
		</GlobalContextProvider>
	)
}

export default Root