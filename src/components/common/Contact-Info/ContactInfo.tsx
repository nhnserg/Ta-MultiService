import { Phone, Mail, Clock } from 'lucide-react'
import { Contact } from './types'

export const ContactInfo: React.FC<{ contact: Contact }> = ({ contact }) => {
	return (
		<div>
			<h3 className='text-xl font-bold mb-4'>Contact</h3>
			<ul className='space-y-4'>
				<li className='flex items-center'>
					<Phone size={20} className='mr-2 text-blue-500' />
					<a
						href={`tel:+33${contact.phone.replace(/\s/g, '')}`}
						className='text-gray-400 hover:text-white transition-colors'
					>
						{contact.phone}
					</a>
				</li>
				<li className='flex items-center'>
					<Mail size={20} className='mr-2 text-blue-500' />
					<a
						href={`mailto:${contact.email}`}
						className='text-gray-400 hover:text-white transition-colors'
					>
						{contact.email}
					</a>
				</li>
				<li className='flex items-start'>
					<Clock size={20} className='mr-2 text-blue-500 flex-shrink-0 mt-1' />
					<span className='text-gray-400'>
						{contact.workingHours.weekdays}
						<br />
						{contact.workingHours.saturday}
					</span>
				</li>
			</ul>
		</div>
	)
}
