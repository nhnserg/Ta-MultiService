import { ButtonProps } from './types'

const Button = ({
	variant = 'primary',
	size = 'md',
	isLoading = false,
	icon,
	iconPosition = 'right',
	children,
	className = '',
	disabled,
	...props
}: ButtonProps) => {
	const baseStyles =
		'font-medium rounded-lg transition-colors duration-300 flex items-center justify-center'

	const variantStyles = {
		primary: 'bg-blue-600 hover:bg-blue-700 text-white',
		secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
		outline:
			'bg-transparent hover:bg-white/10 border-2 border-white text-white',
	}

	const sizeStyles = {
		sm: 'py-2 px-4 text-sm',
		md: 'py-3 px-6',
		lg: 'py-4 px-8 text-lg',
	}

	const disabledStyles =
		isLoading || disabled ? 'opacity-70 cursor-not-allowed' : ''

	return (
		<button
			className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
			disabled={isLoading || disabled}
			{...props}
		>
			{isLoading ? (
				<>
					<svg
						className='animate-spin -ml-1 mr-3 h-5 w-5 text-current'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
					>
						<circle
							className='opacity-25'
							cx='12'
							cy='12'
							r='10'
							stroke='currentColor'
							strokeWidth='4'
						></circle>
						<path
							className='opacity-75'
							fill='currentColor'
							d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
						></path>
					</svg>
					Chargement...
				</>
			) : (
				<>
					{icon && iconPosition === 'left' && (
						<span className='mr-2'>{icon}</span>
					)}
					{children}
					{icon && iconPosition === 'right' && (
						<span className='ml-2'>{icon}</span>
					)}
				</>
			)}
		</button>
	)
}

export default Button
