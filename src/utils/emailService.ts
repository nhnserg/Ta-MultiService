import emailjs from 'emailjs-com'
import { ContactFormData } from '../types'

/**
 * Sends an email using EmailJS service
 * @param data - Form data to send
 * @returns Promise resolving when email is sent
 */
export const sendEmail = async (data: ContactFormData): Promise<void> => {
	const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
	const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
	const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID

	const templateParams = {
		from_name: data.name,
		from_email: data.email,
		from_phone: data.phone,
		message: data.message,
		service: data.service,
	}

	try {
		await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
		console.log('Email sent successfully!')
	} catch (error) {
		console.error('Error sending email:', error)
		throw error
	}
}
