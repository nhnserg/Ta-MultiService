import { useState, useCallback } from 'react'
import { sendEmail } from '../utils/emailService'
import { ContactFormData } from '../types'

export const useFormSubmission = () => {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
		null
	)

	const onSubmit = useCallback(async (data: ContactFormData) => {
		setIsSubmitting(true)
		try {
			await sendEmail(data)
			setSubmitStatus('success')
		} catch (error) {
			console.error("Erreur lors de l'envoi du formulaire:", error)
			setSubmitStatus('error')
		} finally {
			setIsSubmitting(false)
			setTimeout(() => setSubmitStatus(null), 5000)
		}
	}, [])

	return { isSubmitting, submitStatus, onSubmit }
}
