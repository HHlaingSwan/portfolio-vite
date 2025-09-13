import React from "react";
import {
	FaGithub,
	FaLinkedin,
	FaFacebook,
	FaEnvelope,
	FaPhone,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
	const socialLinks = [
		{
			icon: <FaGithub size={24} />,
			href: "https://github.com/HHlaingSwan",
		},
		{
			icon: <FaLinkedin size={24} />,
			href: "https://www.linkedin.com/in/h-hlaing-swan-345956353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
		},
		{
			icon: <FaFacebook size={24} />,
			href: "https://www.facebook.com/profile.php?id=100036843302218&mibextid=ZbWKwL",
		},
	];

	const socialContainerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const socialItemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { type: "spring", stiffness: 120 },
		},
	};

	return (
		<footer className='bg-[var(--color-bg-primary)]/80 backdrop-blur-sm text-[var(--color-text-primary)] py-12 relative'>
			<div className='container mx-auto px-4'>
				{/* <div className='mx-auto w-full text-center py-8 my-10'>
					<p className='text-sky-600 text-xl font-semibold animate-pulse'>
						I Love You  ❤️
					</p>
				</div> */}

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left'>
					{/* About */}
					<div>
						<h3 className='text-2xl font-bold mb-4 text-[var(--color-accent-light)]'>
							H.Hlaing Swan
						</h3>
						<p className='text-[var(--color-text-tertiary)] mb-4'>
							Full-stack developer specializing in creating responsive and
							user-friendly web applications.
						</p>
						<a
							href='mailto:htethlaingswan@gmail.com'
							className='text-[var(--color-text-tertiary)] hover:text-[var(--color-accent-light)] transition-colors duration-300 flex items-center justify-center md:justify-start gap-2'>
							<FaEnvelope />
							htethlaingswan@gmail.com
						</a>
						<h3 className='text-[var(--color-text-tertiary)]'> 09-954641112</h3>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className='text-2xl font-bold mb-4 text-[var(--color-accent-light)]'>
							Quick Links
						</h3>
						<ul className='space-y-2'>
							{["Home", "About", "Projects", "Experience", "Contact"].map(
								(link) => (
									<li key={link}>
										<a
											href={`#${link.toLowerCase()}`}
											className='text-[var(--color-text-tertiary)] hover:text-[var(--color-accent-light)] transition-colors duration-300'>
											{link}
										</a>
									</li>
								)
							)}
						</ul>
					</div>

					{/* Social Links */}
					<div>
						<h3 className='text-2xl font-bold mb-4 text-[var(--color-accent-light)]'>
							Connect With Me
						</h3>
						<motion.div
							className='flex justify-center md:justify-start space-x-6'
							variants={socialContainerVariants}
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true, amount: 0.5 }}>
							{socialLinks.map((link, index) => (
								<motion.a
									key={index}
									href={link.href}
									target='_blank'
									rel='noopener noreferrer'
									className='text-[var(--color-text-tertiary)] hover:text-[var(--color-accent-light)] transition-colors duration-300'
									whileHover={{ y: -3, scale: 1.1 }}
									variants={socialItemVariants}>
									{link.icon}
								</motion.a>
							))}
						</motion.div>
					</div>
				</div>

				{/* Copyright */}
				<div className='text-center text-slate-500 text-sm mt-12 border-t border-[var(--color-bg-secondary)] pt-8'>
					<p>
						© {new Date().getFullYear()} H.Hlaing Swan. All rights reserved.
					</p>
					<p className='mt-1'>Built with React and Tailwind CSS</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
