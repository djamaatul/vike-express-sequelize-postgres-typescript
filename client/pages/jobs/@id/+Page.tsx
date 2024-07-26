import React, { useEffect, useState } from 'react'

function JobDetail() {
	const [data, setData] = useState(null);
	const getData = async () => {
		const [, , path] = location.pathname.split('/')
		const response = await fetch(`${import.meta.env.API_BASE}/v1/jobs/${path}`, { credentials: 'include' })
		if (!response.ok) return;
		const data = await response.json();
		setData(data.data);
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div className='p-2 flex flex-col gap-4'>
			<a href="/jobs" className='hover:text-primary'>Kembali</a>
			{data && (
				<div>
					<h1 className='text-lg font-medium'>{data.title}</h1>
					<p dangerouslySetInnerHTML={{ __html: data.description }}></p>
					<span>Dibuat tanggal: {data.created_at}</span>
				</div>
			)}
		</div>
	)
}

export default JobDetail