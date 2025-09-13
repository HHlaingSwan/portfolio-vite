import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiSend, FiLoader, FiCheckCircle, FiXCircle } from "react-icons/fi";
import undrawProgramming from "../assets/undraw_programming_65t2.svg";

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
			className='py-20 bg-gradient-to-b from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className='text-center  mb-12'>
					<h2 className='text-4xl font-bold mb-3  text-[var(--color-text-primary)]'>
						Get In Touch
					</h2>
					<p className='text-[var(--color-text-subtle)] max-w-xl mx-auto'>
						Have a project in mind or want to collaborate? Feel free to reach
						out!
					</p>
				</motion.div>

				<div className='max-w-6xl mx-auto flex flex-col  md:flex-row gap-12   items-center justify-center'>
					{/* Illustration */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='w-full md:w-[45%] flex  justify-center'>
						<img
							src={undrawProgramming}
							alt='Contact Illustration'
							className='w-full h-full '
						/>
					</motion.div>

					{/* Form */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='w-full md:w-[55%]'>
						<form
							ref={formRef}
							onSubmit={handleSubmit}
							className='bg-[var(--color-bg-secondary)]/50 backdrop-blur-sm p-8 rounded-lg shadow-xl border  border-[var(--color-bg-tertiary)]/50'>
							<div className='mb-6'>
								<label
									htmlFor='name'
									className='block text-[var(--color-text-secondary)] mb-2 font-medium'>
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
									className='w-full bg-[var(--color-bg-tertiary)]/50 text-[var(--color-text-primary)] border border-slate-600 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-light)] focus:border-transparent transition-all duration-300'
								/>
							</div>

							<div className='mb-6'>
								<label
									htmlFor='email'
									className='block text-[var(--color-text-secondary)] mb-2 font-medium'>
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
									className='w-full bg-[var(--color-bg-tertiary)]/50 text-[var(--color-text-primary)] border border-slate-600 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-light)] focus:border-transparent transition-all duration-300'
								/>
							</div>

							<div className='mb-6'>
								<label
									htmlFor='message'
									className='block text-[var(--color-text-secondary)] mb-2 font-medium'>
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
									className='w-full bg-[var(--color-bg-tertiary)]/50 text-[var(--color-text-primary)] border border-slate-600 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-light)] focus:border-transparent transition-all duration-300'></textarea>
							</div>

							<button
								type='submit'
								disabled={loading}
								className='w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-darker)] text-slate-900 font-bold py-3 px-4 rounded-md transition-all duration-300 flex items-center justify-center shadow-lg disabled:bg-slate-600'>
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
