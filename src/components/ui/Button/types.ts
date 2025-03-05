import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'outline'
	size?: 'sm' | 'md' | 'lg'
	isLoading?: boolean
	icon?: ReactNode
	iconPosition?: 'left' | 'right'
	children: ReactNode
}
