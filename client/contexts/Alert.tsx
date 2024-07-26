import React, { FC, useState } from 'react'
import { createPortal } from 'react-dom';

export type SetShow = (message: string) => void

export const AlertContext = React.createContext<SetShow>(() => null);

interface Props {
	children: any
}

const AlertProvider: FC<Props> = ({ children }) => {
	const [alert, setAlert] = useState([]);

	const showAlert: SetShow = (message: string) => {
		setAlert(prev => {
			const next = [...prev, message];
			return next
		})
		setTimeout(() => {
			const next = [...alert];
			next.shift();
			setAlert(next)
		}, 2000)
	}

	return (
		<AlertContext.Provider value={showAlert}>
			<>
				{createPortal(
					<div id='alerts' className='flex flex-col items-center' key='alerts'>
						{alert.map((message, idx) => (
							<div className='absolute bg-white rounded-lg border text-center p-4 h-20 right-4' style={{ top: `${(idx + .1) * 4}rem` }} key={`alert-${idx}`}>{message}</div>
						))}
					</div>
					, document.querySelector('body'))}
				{children}
			</>
		</AlertContext.Provider>
	)
}

export default AlertProvider