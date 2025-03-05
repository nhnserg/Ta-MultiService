import { TestimonialsList } from '../../components/common/Testimonials-List/Testimonials-List'
import { Section } from '../../components/ui/Section/Section'
import testimonials from '../../data/testimonials.json'

const Testimonials = () => {
	return (
		<Section
			title='Ce que disent nos clients'
			description='Découvrez les témoignages de nos clients satisfaits et rejoignez-les en nous confiant votre projet.'
			background='blue'
		>
			<TestimonialsList testimonials={testimonials} />
		</Section>
	)
}

export default Testimonials
