import ContactForm from './section/ContactForm/ContactForm'
import { FAQ } from './section/Faq/FAQ'
import Footer from './section/Footer/Footer'
import Header from './section/Header/Header'
import Hero from './section/Hero/Hero'
import ProjectGallery from './section/ProjectGallery/ProjectGallery'
import Services from './section/Services/Services'
import Testimonials from './section/Testimonials/Testimonials'

const App = () => {
	return (
		<div className='font-sans'>
			<Header />
			<Hero />
			<Services />
			<ProjectGallery />
			<Testimonials />
			<FAQ />
			<ContactForm />
			<Footer />
		</div>
	)
}

export default App
