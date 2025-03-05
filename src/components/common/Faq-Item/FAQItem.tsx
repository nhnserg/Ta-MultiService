import { ChevronDown, ChevronUp } from 'lucide-react'
import { FAQItemProps } from './types'

export const FAQItem = ({ faq, isOpen, toggleItem }: FAQItemProps) => {
	return (
		<div className='mb-4'>
			<button
				onClick={toggleItem}
				className='flex justify-between items-center w-full text-left p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'
				aria-expanded={isOpen}
			>
				<span className='text-lg font-medium text-gray-900'>
					{faq.question}
				</span>
				{isOpen ? (
					<ChevronUp className='text-blue-600' />
				) : (
					<ChevronDown className='text-blue-600' />
				)}
			</button>
			{isOpen && (
				<div className='p-5 bg-white border-t border-gray-100 rounded-b-lg'>
					<p className='text-gray-600'>{faq.answer}</p>
				</div>
			)}
		</div>
	)
}
