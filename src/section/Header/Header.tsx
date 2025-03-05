import { Mail, Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'
import { Container } from '../../components/ui/Container/Container'
import { CONTACT_EMAIL, CONTACT_PHONE, SITE_NAME } from '../../constants'
import { useScrollPosition } from '../../hooks/useScrollPosition'

const navLinks = [
	{ href: '#accueil', label: 'Accueil' },
	{ href: '#services', label: 'Services' },
	{ href: '#projets', label: 'Projets' },
	{ href: '#faq', label: 'FAQ' },
	{ href: '#contact', label: 'Contact' },
]

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const isScrolled = useScrollPosition(50)

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
	const closeMenu = () => setIsMenuOpen(false)

	return (
		<header
			className={`fixed w-full z-50 transition-all duration-300 ${
				isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
			}`}
		>
			<Container>
				<div className='flex justify-between items-center'>
					<div className='flex items-center'>
						<h1
							className={`text-2xl font-bold ${
								isScrolled ? 'text-blue-900' : 'text-white'
							}`}
						>
							{SITE_NAME}
						</h1>
					</div>

					{/* Desktop Navigation */}
					<nav className='hidden md:flex space-x-8'>
						{navLinks.map(link => (
							<a
								key={link.href}
								href={link.href}
								className={`font-medium hover:text-blue-500 transition-colors ${
									isScrolled ? 'text-gray-800' : 'text-white'
								}`}
							>
								{link.label}
							</a>
						))}
					</nav>

					<div className='hidden md:flex items-center space-x-4'>
						<a
							href={`tel:+33${CONTACT_PHONE.replace(/\s/g, '')}`}
							className={`flex items-center space-x-2 ${
								isScrolled ? 'text-gray-800' : 'text-white'
							}`}
						>
							<Phone size={18} />
							<span>{CONTACT_PHONE}</span>
						</a>
					</div>

					{/* Mobile Menu Button */}
					<button
						className='md:hidden focus:outline-none'
						onClick={toggleMenu}
						aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
					>
						{isMenuOpen ? (
							<X
								size={24}
								className={isScrolled ? 'text-gray-800' : 'text-white'}
							/>
						) : (
							<Menu
								size={24}
								className={isScrolled ? 'text-gray-800' : 'text-white'}
							/>
						)}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className='md:hidden bg-white shadow-lg rounded-lg mt-4 p-4 absolute left-0 right-0 mx-4'>
						<nav className='flex flex-col space-y-4'>
							{navLinks.map(link => (
								<a
									key={link.href}
									href={link.href}
									className='text-gray-800 font-medium hover:text-blue-500 transition-colors'
									onClick={closeMenu}
								>
									{link.label}
								</a>
							))}
							<div className='pt-4 border-t border-gray-200'>
								<a
									href={`tel:+33${CONTACT_PHONE.replace(/\s/g, '')}`}
									className='flex items-center space-x-2 text-gray-800'
								>
									<Phone size={18} />
									<span>{CONTACT_PHONE}</span>
								</a>
								<a
									href={`mailto:${CONTACT_EMAIL}`}
									className='flex items-center space-x-2 text-gray-800 mt-2'
								>
									<Mail size={18} />
									<span>{CONTACT_EMAIL}</span>
								</a>
							</div>
						</nav>
					</div>
				)}
			</Container>
		</header>
	)
}

export default Header
