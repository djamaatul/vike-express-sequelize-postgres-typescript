import { FC, ForwardedRef, forwardRef, useMemo } from "react";

interface Props {
	name: string,
	required?: boolean,
	id?: string,
	placeholder?: string,
	label?: string,
	type?: string,
	error?: string
}

const Input: FC<Props> = forwardRef(({ error, ...props }, ref: ForwardedRef<HTMLInputElement>) => {

	const label = props.label || props.placeholder;
	const id = props.id || props.name;
	const type = props.type ?? 'text';

	const className = useMemo(() => {
		let className = 'border rounded-lg p-3 focus:outline-none placeholder:text-transparent peer';
		if (!error) {
			className = `${className} focus:border-primary focus:text-primary`
		} else className = `${className} border-error text-error`
		return className
	}, [error])

	const labelClassName = useMemo(() => {
		let className = '';
		if (props.required) className = `${className} after:content-['*'] peer-focus:after:text-error`
		return className;
	}, [props.required]);

	return (
		<div>
			<div className="relative flex flex-col">
				<input className={className} {...props} placeholder={label} id={id} type={type} ref={ref} data-error={error} />
				<label htmlFor={id} className={`absolute -translate-y-1/2 top-1/2 left-4 bg-white p-1 duration-300 peer-focus-within:top-0 peer-focus-within:text-primary peer-[:not(:placeholder-shown)]:top-0 ${labelClassName}`}>{label}</label>
			</div>
			{error && <p className="text-error">{error}</p>}
		</div>
	)
})

export default Input