import { CategoryFilterProps } from './types'

export const CategoryFilter = ({
	categories,
	activeCategory,
	setActiveCategory,
}: CategoryFilterProps) => {
	return (
		<div className='flex flex-wrap justify-center gap-4 mb-10'>
			{categories.map(category => (
				<button
					key={category}
					onClick={() => setActiveCategory(category)}
					className={`px-4 py-2 rounded-full transition-colors ${
						activeCategory === category
							? 'bg-blue-600 text-white'
							: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
					}`}
					aria-pressed={activeCategory === category}
				>
					{category}
				</button>
			))}
		</div>
	)
}
