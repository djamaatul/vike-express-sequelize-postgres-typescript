import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { FC, Fragment } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { ZodSchema, z } from "zod"
import Input from "./Input"

interface Props {
	children: any,
	className: string
	schema?: ZodSchema<any>,
	onSubmit?: SubmitHandler<any>,
	fields: { name: string, type?: string, label?: string, required?: boolean }[]
}

const Form: FC<Props> = ({ children, onSubmit, fields, ...props }) => {
	const form = useForm({
		resolver: zodResolver(props.schema ?? z.object({})),
	})
	const handleSubmit = (v: FieldValues) => {
		onSubmit?.(v);
	}
	return (
		<form onSubmit={form.handleSubmit(handleSubmit)} {...props}>
			{fields.map(field => (
				<Fragment key={field.name}>
					<Input type={field.type} {...field} {...form.register(field.name)} error={`${form.formState.errors[field.name]?.message || ''}`} />
				</Fragment>
			))}
			{children}
		</form>
	)
}

export default Form