import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";

const ContactMe = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setError(null);
		setSuccess(false);

		// Replace these with your actual Email.js service ID, template ID, and public key
		emailjs
			.sendForm(
				import.meta.env.VITE_APP_SERVICE_EMAILJS_ID,
				import.meta.env.VITE_APP_SERVICE_TEMPLATE_ID,
				formRef.current,
				import.meta.env.VITE_APP_SERVICE_PUBLIC_KEY_ID
			)
			.then((result) => {
				setLoading(false);
				setSuccess(true);
				setForm({
					name: "",
					email: "",
					message: "",
				});
				console.log("Email sent successfully:", result.text);
			})
			.catch((error) => {
				setLoading(false);
				setError("Failed to send message. Please try again.");
				console.error("Email error:", error);
			});
	};

	return (
		<section
			id='contact'
			className='py-16 bg-gradient-to-b from-gray-900 to-gray-800'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className='text-center mb-12'>
					<h2 className='text-3xl font-bold mb-2 text-white'>Get In Touch</h2>
					<p className='text-gray-300 max-w-xl mx-auto'>
						Have a project in mind or want to collaborate? Feel free to reach
						out!
					</p>
				</motion.div>

				<div className='max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center'>
					{/* Cartoon Image */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className='w-full md:w-2/5 flex justify-center'>
						<div className='relative'>
							{/* Option 1: Use a remote URL (temporary solution) */}
							<img
								src='/undraw_dev-productivity_5wps.svg'
								alt='Contact Illustration'
								className='w-full max-w-md'
							/>

							{/* Option 2: Use an emoji or icon as a fallback */}
							{/* <div className='text-9xl flex items-center justify-center h-64 w-64 bg-gray-800 rounded-full'>
								👨‍💻
							</div> */}

							{/* Decorative elements */}
							<div className='absolute -top-10 -left-10 w-20 h-20 bg-amber-500/20 rounded-full blur-xl'></div>
							<div className='absolute -bottom-5 -right-5 w-32 h-32 bg-purple-500/20 rounded-full blur-xl'></div>
						</div>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className='w-full md:w-3/5'>
						<motion.form
							ref={formRef}
							onSubmit={handleSubmit}
							className='bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-gray-700/50'>
							<div className='mb-6'>
								<label
									htmlFor='name'
									className='block text-gray-200 mb-2 font-medium'>
									Your Name
								</label>
								<input
									type='text'
									id='name'
									name='name'
									placeholder='your name'
									value={form.name}
									onChange={handleChange}
									required
									className='w-full bg-gray-700/70 text-white border border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300'
								/>
							</div>

							<div className='mb-6'>
								<label
									htmlFor='email'
									className='block text-gray-200 mb-2 font-medium'>
									Your Email
								</label>
								<input
									type='email'
									placeholder='example@gmail.com'
									id='email'
									name='email'
									value={form.email}
									onChange={handleChange}
									required
									className='w-full bg-gray-700/70 text-white border border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300'
								/>
							</div>

							<div className='mb-6'>
								<label
									htmlFor='message'
									className='block text-gray-200 mb-2 font-medium'>
									Your Message
								</label>
								<textarea
									id='message'
									name='message'
									value={form.message}
									onChange={handleChange}
									placeholder='leave a phone no or email to contact you back'
									required
									rows='5'
									className='w-full bg-gray-700/70 text-white border border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300'></textarea>
							</div>

							<button
								type='submit'
								disabled={loading}
								className='w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900 font-bold py-3 px-4 rounded-md transition-all duration-300 flex items-center justify-center shadow-lg'>
								{loading ? (
									<>
										<FaSpinner className='animate-spin mr-2' /> Sending...
									</>
								) : (
									<>
										<FaPaperPlane className='mr-2' /> Send Message
									</>
								)}
							</button>

							{success && (
								<motion.p
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									className='mt-4 text-green-400 text-center'>
									Message sent successfully!
								</motion.p>
							)}

							{error && (
								<motion.p
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									className='mt-4 text-red-400 text-center'>
									{error}
								</motion.p>
							)}
						</motion.form>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ContactMe;
