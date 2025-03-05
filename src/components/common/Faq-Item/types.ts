import { FAQ as FAQType } from '../../../types'

export interface FAQItemProps {
	faq: FAQType
	isOpen: boolean
	toggleItem: () => void
}
