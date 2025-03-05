import { FooterLinkProps } from './types'

export const FooterLink = ({ href, label }: FooterLinkProps) => (
	<li>
		<a href={href} className='text-gray-400 hover:text-white transition-colors'>
			{label}
		</a>
	</li>
)
