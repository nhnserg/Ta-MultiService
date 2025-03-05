import { Project } from '../../../types'

export interface ProjectModalProps {
	project: Project
	onClose: () => void
	thumbsSwiper: any
	setThumbsSwiper: (swiper: any) => void
}
