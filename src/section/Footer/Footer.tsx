import { ContactInfo } from '../../components/common/Contact-Info/ContactInfo'
import { FooterLink } from '../../components/common/Footer-Link/FooterLink'
import { SocialLinks } from '../../components/common/Social-Links/SocialLinks'
import footerData from '../../data/footerData.json'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='bg-gray-900 text-white pt-16 pb-8'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
					{/* Company Info */}
					<div>
						<h3 className='text-xl font-bold mb-4'>{footerData.companyName}</h3>
						<p className='text-gray-400 mb-4'>{footerData.description}</p>
						<SocialLinks />
					</div>

					{/* Quick Links */}
					<div>
						<h3 className='text-xl font-bold mb-4'>Liens rapides</h3>
						<ul className='space-y-2'>
							{footerData.quickLinks.map(link => (
								<FooterLink key={link.href} {...link} />
							))}
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className='text-xl font-bold mb-4'>Services</h3>
						<ul className='space-y-2'>
							{footerData.services.map(service => (
								<li
									key={service}
									className='text-gray-400 hover:text-white transition-colors cursor-default'
								>
									{service}
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<ContactInfo contact={footerData.contact} />
				</div>

				<div className='pt-8 border-t border-gray-800 text-center text-gray-500'>
					<p>
						© {currentYear} {footerData.companyName}. Tous droits réservés.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
