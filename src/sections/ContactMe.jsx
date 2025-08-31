import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiSend, FiLoader, FiCheckCircle, FiXCircle } from "react-icons/fi";
import DemoImage from "../assets/undraw_dev-productivity_5wps.svg";

const ContactMe = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState({
		success: false,
		error: false,
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setStatus({ success: false, error: false, message: "" });

		emailjs
			.sendForm(
				import.meta.env.VITE_APP_SERVICE_EMAILJS_ID,
				import.meta.env.VITE_APP_SERVICE_TEMPLATE_ID,
				formRef.current,
				import.meta.env.VITE_APP_SERVICE_PUBLIC_KEY_ID
			)
			.then(
				() => {
					setLoading(false);
					setStatus({
						success: true,
						error: false,
						message: "Message sent successfully!",
					});
					setForm({ name: "", email: "", message: "" });
				},
				(error) => {
					setLoading(false);
					setStatus({
						success: false,
						error: true,
						message: "Failed to send message. Please try again.",
					});
					console.error("Email error:", error);
				}
			);
	};

	return (
		<section
			id='contact'
			className='py-20 bg-gradient-to-b from-gray-900 to-gray-800'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className='text-center mb-12'>
					<h2 className='text-4xl font-bold mb-3 text-white'>Get In Touch</h2>
					<p className='text-gray-300 max-w-xl mx-auto'>
						Have a project in mind or want to collaborate? Feel free to reach
						out!
					</p>
				</motion.div>

				<div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center'>
					{/* Illustration */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='w-full md:w-2/5 flex justify-center'>
						<img
							src={DemoImage}
							alt='Contact Illustration'
							className='w-full max-w-sm'
						/>
					</motion.div>

					{/* Form */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='w-full md:w-3/5'>
						<form
							ref={formRef}
							onSubmit={handleSubmit}
							className='bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-gray-700/50'>
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
									placeholder='e.g. John Doe'
									value={form.name}
									onChange={handleChange}
									required
									className='w-full bg-gray-700/50 text-white border border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300'
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
									id='email'
									name='email'
									placeholder='e.g. john.doe@example.com'
									value={form.email}
									onChange={handleChange}
									required
									className='w-full bg-gray-700/50 text-white border border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300'
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
									placeholder='Your message here...'
									required
									rows='5'
									className='w-full bg-gray-700/50 text-white border border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300'></textarea>
							</div>

							<button
								type='submit'
								disabled={loading}
								className='w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-4 rounded-md transition-all duration-300 flex items-center justify-center shadow-lg disabled:bg-gray-600'>
								{loading ? (
									<FiLoader className='animate-spin mr-2' />
								) : (
									<FiSend className='mr-2' />
								)}
								{loading ? "Sending..." : "Send Message"}
							</button>

							{status.message && (
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									className={`mt-4 text-center flex items-center justify-center ${
										status.success ? "text-green-400" : "text-red-400"
									}`}>
									{status.success ? (
										<FiCheckCircle className='mr-2' />
									) : (
										<FiXCircle className='mr-2' />
									)}
									{status.message}
								</motion.div>
							)}
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ContactMe;