import { Clock, Mail, Phone } from 'lucide-react'
import contactInfoData from '../../../data/contactInfo.json'
import { ContactInfoItemProps } from './types'

const Icon = ({ name }: { name: string }) => {
	switch (name) {
		case 'phone':
			return <Phone className='text-blue-500' />
		case 'mail':
			return <Mail className='text-blue-500' />
		case 'clock':
			return <Clock className='text-blue-500' />
		default:
			return null
	}
}

const ContactInfoItem = ({
	title,
	icon,
	content,
	link,
}: ContactInfoItemProps) => {
	const renderContent = () => {
		if (typeof content === 'string') {
			return content
		}

		if (typeof content === 'object') {
			return (
				<>
					Du Lundi au Vendredi:{' '}
					<span className='font-semibold'>{content.weekdays}</span>
					<br />
					Samedi: <span className='font-semibold'>{content.saturday}</span>
					<br />
					Dimanche: <span className='font-semibold'>{content.sunday}</span>
				</>
			)
		}

		return null
	}

	return (
		<div className='mb-8'>
			<h4 className='text-lg font-semibold text-gray-900 mb-2'>{title}</h4>
			<div className='flex items-start'>
				<span className='mr-2 flex-shrink-0 mt-1'>
					<Icon name={icon} />
				</span>
				{link ? (
					<a
						href={link}
						className='text-blue-500 hover:text-blue-600 transition-colors'
					>
						{renderContent()}
					</a>
				) : (
					<p className='text-gray-600'>{renderContent()}</p>
				)}
			</div>
		</div>
	)
}

const ContactInfoList = () => (
	<div className='bg-white gap-4 rounded-lg shadow-md p-8'>
		{contactInfoData.map((item, index) => (
			<ContactInfoItem
				key={index}
				title={item.title}
				icon={item.icon}
				content={item.content}
				link={item.link}
			/>
		))}
	</div>
)

export default ContactInfoList
