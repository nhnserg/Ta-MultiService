import { useCallback, useState } from 'react'
import { CategoryFilter } from '../../components/common/Category-Filter/CategoryFilter'
import { ProjectCard } from '../../components/common/Project-Card/ProjectCard'
import { Section } from '../../components/ui/Section/Section'
import projectsData from '../../data/projects.json'
import { Project } from '../../types'
import { ProjectModal } from '../../components/common/Project-Modal/ProjectModal'

const ProjectGallery = () => {
	const [selectedProject, setSelectedProject] = useState<Project | null>(null)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
	const [activeCategory, setActiveCategory] = useState<string>('Tous')

	const categories = [
		'Tous',
		...Array.from(
			new Set(projectsData.map((project: Project) => project.category))
		),
	]

	const filteredProjects =
		activeCategory === 'Tous'
			? projectsData
			: projectsData.filter(project => project.category === activeCategory)

	const openProjectModal = useCallback((project: Project) => {
		setSelectedProject(project)
		setIsModalOpen(true)
		document.body.style.overflow = 'hidden'
	}, [])

	const closeProjectModal = useCallback(() => {
		setIsModalOpen(false)
		document.body.style.overflow = 'auto'
	}, [])

	return (
		<Section
			id='projets'
			title='Nos Réalisations'
			description='Découvrez nos projets de rénovation récents et laissez-vous inspirer pour votre prochain projet.'
		>
			<CategoryFilter
				categories={categories}
				activeCategory={activeCategory}
				setActiveCategory={setActiveCategory}
			/>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{filteredProjects.map(project => (
					<ProjectCard
						key={project.id}
						project={project}
						onClick={() => openProjectModal(project)}
					/>
				))}
			</div>

			{isModalOpen && selectedProject && (
				<ProjectModal
					project={selectedProject}
					onClose={closeProjectModal}
					thumbsSwiper={thumbsSwiper}
					setThumbsSwiper={setThumbsSwiper}
				/>
			)}
		</Section>
	)
}

export default ProjectGallery
