interface Object { [key: string]: any }

interface Options {
	method?: 'POST' | 'GET',
	query?: Object,
	body?: Object
}

const fetcher = (host: string) => async (path: string, options: Options = {}) => {
		
	const url = new URL(host + path)

	const config: RequestInit = {
		method: options.method ?? 'GET'
	}
	
	if(options.method === 'POST' && options.body){
		config.body = JSON.stringify(options.body);
		config.headers = {
			['Content-Types']: 'application/json',
		}
	}

	url.search = new URLSearchParams(options.query ?? {}).toString();
	const response = await fetch(url, config)

	return response.json();
}

export const DANS = (path: string, options = {}) => fetcher(process.env.DANS_HOST as string)(path, { ...options })