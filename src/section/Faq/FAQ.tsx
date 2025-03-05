import { useCallback, useState } from 'react'
import { FAQItem } from '../../components/common/Faq-Item/FAQItem'
import { Section } from '../../components/ui/Section/Section'
import faqsData from '../../data/faqs.json'
import { FAQ as FAQType } from '../../types'

export const FAQ = () => {
	const [openItems, setOpenItems] = useState<number[]>([])

	const toggleItem = useCallback((id: number) => {
		setOpenItems(prevOpenItems =>
			prevOpenItems.includes(id)
				? prevOpenItems.filter(item => item !== id)
				: [...prevOpenItems, id]
		)
	}, [])

	return (
		<Section
			id='faq'
			title='Questions Fréquentes'
			description='Trouvez les réponses aux questions les plus courantes sur nos services de rénovation.'
			background='light'
		>
			<div className='max-w-3xl mx-auto'>
				{faqsData.map((faq: FAQType) => (
					<FAQItem
						key={faq.id}
						faq={faq}
						isOpen={openItems.includes(faq.id)}
						toggleItem={() => toggleItem(faq.id)}
					/>
				))}
			</div>
		</Section>
	)
}
