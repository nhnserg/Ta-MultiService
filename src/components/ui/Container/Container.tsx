import { ContainerProps } from './types'

export const Container = ({ children, className = '' }: ContainerProps) => {
	return <div className={`container mx-auto px-4 ${className}`}>{children}</div>
}
