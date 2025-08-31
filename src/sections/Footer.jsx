import React from "react";
import {
	FaGithub,
	FaLinkedin,
	FaFacebook,
	FaEnvelope,
	FaArrowUp,
	FaPhone,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

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

	return (
		<footer className='bg-gray-900/80 backdrop-blur-sm text-white py-12 relative'>
			<div className='container mx-auto px-4'>
				{/* Back to top button */}
				<div className='absolute -top-6 left-1/2 -translate-x-1/2'>
					<motion.button
						onClick={scrollToTop}
						className='bg-amber-500 hover:bg-amber-600 text-black p-4 rounded-full shadow-lg transition-all duration-300'
						whileHover={{ y: -5, scale: 1.1 }}
						whileTap={{ scale: 0.9 }}>
						<FaArrowUp />
					</motion.button>
				</div>
				{/* <div className='mx-auto w-full text-center py-8 my-10'>
					<p className='text-amber-400 text-xl font-semibold animate-pulse'>
						I Love You Thae Suu YaDaNar Moe ❤️
					</p>
				</div> */}

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left'>
					{/* About */}
					<div>
						<h3 className='text-2xl font-bold mb-4 text-amber-400'>
							H.Hlaing Swan
						</h3>
						<p className='text-gray-400 mb-4'>
							Frontend developer specializing in creating responsive and
							user-friendly websites using React.js.
						</p>
						<a
							href='mailto:htethlaingswan@gmail.com'
							className='text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center justify-center md:justify-start gap-2'>
							<FaEnvelope />
							htethlaingswan@gmail.com
						</a>
						<h3 className='text-gray-400'> 09-954641112</h3>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className='text-2xl font-bold mb-4 text-amber-400'>
							Quick Links
						</h3>
						<ul className='space-y-2'>
							{["Home", "About", "Projects", "Experience", "Contact"].map(
								(link) => (
									<li key={link}>
										<a
											href={`#${link.toLowerCase()}`}
											className='text-gray-400 hover:text-amber-400 transition-colors duration-300'>
											{link}
										</a>
									</li>
								)
							)}
						</ul>
					</div>

					{/* Social Links */}
					<div>
						<h3 className='text-2xl font-bold mb-4 text-amber-400'>
							Connect With Me
						</h3>
						<div className='flex justify-center md:justify-start space-x-6'>
							{socialLinks.map((link, index) => (
								<motion.a
									key={index}
									href={link.href}
									target='_blank'
									rel='noopener noreferrer'
									className='text-gray-400 hover:text-white transition-colors duration-300'
									whileHover={{ y: -3, scale: 1.1 }}>
									{link.icon}
								</motion.a>
							))}
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className='text-center text-gray-500 text-sm mt-12 border-t border-gray-800 pt-8'>
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
