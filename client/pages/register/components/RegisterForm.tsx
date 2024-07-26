/// <reference types="vite/client" />
import React, { useContext } from 'react';
import Button from '../../../components/Button'
import Form from '../../../components/Form'
import { useMemo } from 'react';
import { z } from 'zod'
import { AlertContext } from '../../../contexts/Alert';

function RegisterForm() {
	const showAlert = useContext(AlertContext);
	const fields = useMemo(() => [{ name: 'name', label: 'Nama' }, { name: 'username', label: 'Username' }, { name: 'password', type: 'password', label: 'Password' }], [])

	const schema = z.object({
		name: z.string(),
		username: z.string(),
		password: z.string().min(3),
	});

	const handleSubmit = async (f: z.infer<typeof schema>) => {
		const response = await fetch(`${import.meta.env.API_BASE}/v1/auth/register`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			credentials: 'same-origin',
			body: JSON.stringify({
				name: f.name,
				username: f.username,
				password: f.password
			}),
		}).catch(() => null);

		if (!response) return showAlert('Pendaftaran Gagal');

		if (!response.ok) {
			showAlert(await response.json().then(e => e.message))
			return;
		}

		showAlert(`Registration Sukses`);
	}

	return (
		<Form className='flex flex-col gap-4' fields={fields} schema={schema} onSubmit={handleSubmit}>
			<Button type='button'>Login</Button>
		</Form>
	)
}

export default RegisterForm