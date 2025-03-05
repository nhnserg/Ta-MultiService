export interface ContactInfoItemProps {
	title: string
	icon: string
	content: string | { weekdays: string; saturday: string; sunday: string }
	link?: string
}
