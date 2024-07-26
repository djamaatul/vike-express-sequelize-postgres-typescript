import { useContext, useMemo } from 'react';
import { navigate } from 'vike/client/router';
import Button from '../../../components/Button'
import Form from '../../../components/Form'
import { z } from 'zod'
import { AlertContext } from '../../../contexts/Alert';

function LoginForm() {
	const showAlert = useContext(AlertContext);
	const fields = useMemo(() => [{ name: 'username', label: 'Username' }, { name: 'password', type: 'password', label: 'Password' }], []);

	const schema = z.object({
		username: z.string().min(1, 'Username Harus Diisi'),
		password: z.string().min(3),
	});

	const handleSubmit = async (f: z.infer<typeof schema>) => {
		const response = await fetch(`${import.meta.env.API_BASE}/v1/auth/login`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			credentials: 'include',
			body: JSON.stringify({
				username: f.username,
				password: f.password
			}),
		});

		if (!response) return showAlert('Masuk Gagal');

		if (!response.ok) {
			showAlert(await response.json().then(e => e.message))
			return;
		}
		window.open('/', '_self');
	}
	return (
		<Form className='flex flex-col gap-4' fields={fields} schema={schema} onSubmit={handleSubmit}>
			<Button type='submit'>Login</Button>
		</Form>
	)
}

export default LoginForm