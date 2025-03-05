import { Check, AlertCircle } from 'lucide-react'
import { SubmitMessageProps } from './types'

export const SubmitMessage = ({ type, message }: SubmitMessageProps) => (
	<div
		className={`mb-6 p-4 ${
			type === 'success'
				? 'bg-green-100 border-green-200 text-green-800'
				: 'bg-red-100 border-red-200 text-red-800'
		} rounded-lg flex items-center`}
	>
		{type === 'success' ? (
			<Check className='mr-2' />
		) : (
			<AlertCircle className='mr-2' />
		)}
		<span>{message}</span>
	</div>
)
