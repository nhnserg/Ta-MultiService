import { Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import ContactInfoList from '../../components/common/ContactInfo-Item/ContactInfoItem'
import Button from '../../components/ui/Button/Button'
import { FormField } from '../../components/ui/FormField/FormField'
import { Section } from '../../components/ui/Section/Section'
import { SubmitMessage } from '../../components/ui/SubmitMessage/SubmitMessage'
import servicesData from '../../data/services.json'
import { useFormSubmission } from '../../hooks/useFormSubmission'
import { ContactFormData } from '../../types'

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactFormData>()
	const { isSubmitting, submitStatus, onSubmit } = useFormSubmission()

	return (
		<Section
			id='contact'
			title='Contactez-nous'
			description='Vous avez un projet de rénovation ? Contactez-nous pour obtenir un devis gratuit et sans engagement.'
		>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
				<div>
					<h3 className='text-2xl font-bold text-gray-900 mb-6'>
						Envoyez-nous un message
					</h3>

					{submitStatus && (
						<SubmitMessage
							type={submitStatus}
							message={
								submitStatus === 'success'
									? 'Votre message a été envoyé avec succès.'
									: "Une erreur s'est produite lors de l'envoi de votre message."
							}
						/>
					)}

					<form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
						<FormField
							id='name'
							label='Nom complet:'
							error={errors.name}
							placeholder='Votre nom'
							{...register('name', { required: 'Le nom est requis' })}
						/>
						<FormField
							id='email'
							type='email'
							label='Email:'
							error={errors.email}
							placeholder='Votre email'
							{...register('email', {
								required: "L'email est requis",
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'Adresse email invalide',
								},
							})}
						/>
						<FormField
							id='phone'
							type='tel'
							label='Téléphone:'
							error={errors.phone}
							placeholder='Votre numéro de téléphone'
							{...register('phone', { required: 'Le téléphone est requis' })}
						/>
						<div>
							<label
								htmlFor='service'
								className='block text-sm font-medium text-gray-700 mb-1'
							>
								Service souhaité
							</label>
							<select
								id='service'
								className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
								{...register('service')}
							>
								<option value=''>Sélectionnez un service</option>
								{servicesData.map(service => (
									<option key={service.id} value={service.title}>
										{service.title}
									</option>
								))}
								<option value='Autre'>Autre</option>
							</select>
						</div>
						<div>
							<label
								htmlFor='message'
								className='block text-sm font-medium text-gray-700 mb-1'
							>
								Message *
							</label>
							<textarea
								id='message'
								rows={5}
								className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
									errors.message ? 'border-red-500' : 'border-gray-300'
								}`}
								placeholder='Décrivez votre projet...'
								{...register('message', { required: 'Le message est requis' })}
							></textarea>
							{errors.message && (
								<p className='mt-1 text-sm text-red-600'>
									{errors.message.message}
								</p>
							)}
						</div>

						<Button
							type='submit'
							disabled={isSubmitting}
							isLoading={isSubmitting}
							icon={<Send size={20} />}
							className='w-full'
						>
							Envoyer le message
						</Button>
					</form>
				</div>

				<div>
					<h3 className='text-2xl font-bold text-gray-900 mb-6'>
						Informations de contact
					</h3>
					<ContactInfoList />
				</div>
			</div>
		</Section>
	)
}

export default ContactForm
