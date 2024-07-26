import React, { FC, useEffect, useState } from 'react'
import { redirect } from 'vike/abort';

export type SetShow = (message: string) => void

export const GlobalContext = React.createContext<InitialState>({ isLogin: false });

interface Props {
	children: any
}

interface InitialState { isLogin: boolean }

const GlobalContextProvider: FC<Props> = ({ children }) => {
	const [state, setState] = useState<InitialState>({
		isLogin: true
	});

	const getAuth = async () => {
		const response = await fetch(`${import.meta.env.API_BASE}/v1/auth`, { credentials: 'include', });
		setState({
			isLogin: response.ok
		})
		if (!response.ok) {
			redirect('/login')
			return;
		};
		redirect('/');
	}

	useEffect(() => {
		getAuth()
	}, [])

	return (
		<GlobalContext.Provider value={state}>
			{children}
		</GlobalContext.Provider>
	)
}

export default GlobalContextProvider