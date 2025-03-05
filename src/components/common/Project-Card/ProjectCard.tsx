import { ProjectCardProps } from './types'

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
	return (
		<div className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300'>
			<div className='relative h-64 overflow-hidden'>
				<img
					src={project.images[0]}
					alt={project.title}
					className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
				/>
			</div>
			<div className='p-6'>
				<h3 className='text-xl font-bold text-gray-900 mb-2'>
					{project.title}
				</h3>
				<p className='text-gray-600 mb-4 line-clamp-3'>{project.description}</p>
				<button
					onClick={onClick}
					className='text-blue-600 font-medium hover:text-blue-800 transition-colors'
				>
					Voir le projet
				</button>
			</div>
		</div>
	)
}
