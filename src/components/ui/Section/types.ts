import { ReactNode } from 'react'

export interface SectionProps {
	id?: string
	title?: string
	description?: string
	children: ReactNode
	className?: string
	background?: 'white' | 'light' | 'blue'
}
