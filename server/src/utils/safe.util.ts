export default async function safe(fn: Function, onError?: Function): Promise<[Error | unknown, any]> {
	try {
		const data = await fn();
		return [null, data];
	} catch (error) {
		await onError?.(error);
		return [error, null];
	}
};
