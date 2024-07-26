import React, { useEffect, useMemo, useState } from 'react'
import Input from '../../components/Input';
import Form from '../../components/Form';
import { z } from 'zod';
import Button from '../../components/Button';

function Jobs() {
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState({});

	const getData = async ({ full_time = false, ...args } = {}) => {
		const params = new URLSearchParams({ ...args, full_time: full_time ? 'true' : 'false' })
		const response = await fetch(`${import.meta.env.API_BASE}/v1/jobs?` + params.toString(), { credentials: 'include' })
		if (!response.ok) return;
		const data = await response.json();
		setData(data.data);
	};

	useEffect(() => {
		getData()
	}, [])

	const handleClick = (id: string) => {
		window.open(`/jobs/${id}`, '_self')
	}

	const fields = useMemo(() => [
		{ name: 'search', label: 'Search' },
		{ name: 'description', label: 'Description' },
		{ name: 'location', label: 'Location' },
		{ name: 'full_time', label: 'Full Time', type: 'checkbox' },
	], []);

	const handleSubmit = (form) => {
		getData(form)
	}

	return (
		<div className='flex flex-col gap-4 p-2'>
			<a href="/" className='hover:text-primary'>Kembali</a>
			<Form className='flex flex-col gap-4' fields={fields} schema={z.any()} onSubmit={handleSubmit} >
				<Button type='submit'>Cari</Button>
			</Form>
			<div className='flex flex-col gap-4 p-4'>
				{data.map((item) => (
					<div key={item.id} className='p-2 border rounded-lg cursor-pointer hover:scale-105 transition-all' onClick={() => handleClick(item.id)}>
						<img src={item.company_logo} alt="" />
						<h2 className='text-lg font-medium'>{item.title}</h2>
						<p className='text-sm truncate'>
							<a href={item.company_url} className='text-primary'>{item.company}</a>
						</p>
						<p dangerouslySetInnerHTML={{ __html: item.description }} className='truncate line-clamp-2'></p>
						<div className='flex justify-between items-end'>
							<a href={item.url} className='hover:text-primary'>Lihat Selengkapnya</a>
							<p className='text-[.1em]'>{item.created_at}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Jobs