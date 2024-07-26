import React from 'react'

function Navbar() {
	const handleClick = async () => {
		await fetch(`${import.meta.env.API_BASE}/v1/auth/logout`, { credentials: 'include', method: 'DELETE' });
		window.open('/login', '_self')
	}
	return (
		<div className='sticky top-0 flex gap-2 justify-between bg-primary text-white p-4 z-50'>
			<a className='text-lg' href='/'>CARI KERJA</a>
			<button type='button' className='hover:bg-white/20 p-2 rounded-lg' onClick={handleClick}>LOGOUT</button>
		</div>
	)
}

export default Navbar