import React from 'react'

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	id: string
	label: string
	error?: { message?: string }
}

export const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
	({ id, label, error, ...props }, ref) => {
		return (
			<div>
				<label
					htmlFor={id}
					className='block text-sm font-medium text-gray-700 mb-1'
				>
					{label}
				</label>
				<input
					ref={ref}
					id={id}
					className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
						error ? 'border-red-500' : 'border-gray-300'
					}`}
					{...props}
				/>
				{error && <p className='mt-1 text-sm text-red-600'>{error.message}</p>}
			</div>
		)
	}
)

FormField.displayName = 'FormField'
