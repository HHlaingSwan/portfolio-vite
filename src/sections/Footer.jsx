import React from "react";
import {
	FaGithub,
	FaLinkedin,
	FaTwitter,
	FaEnvelope,
	FaArrowUp,
	FaFacebook,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<footer className='bg-gray-900 text-white py-12'>
			<div className='container mx-auto px-4'>
				{/* Top section with back to top button */}
				<div className='flex justify-center mb-8'>
					<motion.button
						onClick={scrollToTop}
						className='bg-amber-500 hover:bg-amber-600 text-black p-3 rounded-full shadow-lg transition-all duration-300'
						whileHover={{ y: -5 }}
						whileTap={{ scale: 0.9 }}>
						<FaArrowUp />
					</motion.button>
				</div>
				{/* <div className='mx-auto w-full text-center py-8 my-10'>
					<p className='text-amber-400 text-xl font-semibold animate-pulse'>
						I Love You Thae Suu YaDaNar Moe ❤️
					</p>
				</div> */}

				{/* Main footer content */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
					{/* About column */}
					<div>
						<h3 className='text-xl font-bold mb-4 text-amber-400'>
							H.Hlaing Swan
						</h3>
						<p className='text-gray-400 mb-4'>
							Frontend developer specializing in creating responsive and
							user-friendly websites using React.js.
						</p>
						<p className='text-gray-400'>Based in Myanmar</p>
					</div>

					{/* Quick links */}
					<div>
						<h3 className='text-xl font-bold mb-4 text-amber-400'>
							Quick Links
						</h3>
						<ul className='space-y-2'>
							<li>
								<a
									href='#'
									className='text-gray-400 hover:text-amber-400 transition-colors duration-300'>
									Home
								</a>
							</li>
							<li>
								<a
									href='#about'
									className='text-gray-400 hover:text-amber-400 transition-colors duration-300'>
									About
								</a>
							</li>
							<li>
								<a
									href='#projects'
									className='text-gray-400 hover:text-amber-400 transition-colors duration-300'>
									Projects
								</a>
							</li>
							<li>
								<a
									href='#experience'
									className='text-gray-400 hover:text-amber-400 transition-colors duration-300'>
									Experience
								</a>
							</li>
							<li>
								<a
									href='#contact'
									className='text-gray-400 hover:text-amber-400 transition-colors duration-300'>
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Contact info */}
					<div>
						<h3 className='text-xl font-bold mb-4 text-amber-400'>
							Get In Touch
						</h3>
						<p className='text-gray-400 mb-4'>
							Interested in working together? Feel free to contact me for any
							project or collaboration.
						</p>
						<a
							href='mailto:your.email@example.com'
							className='text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 mb-2'>
							<FaEnvelope /> htethlaingswan@gmail.com
						</a>
					</div>
				</div>

				{/* Social links */}
				<div className='flex justify-center space-x-6 mb-8'>
					<motion.a
						href='https://github.com/HHlaingSwan'
						target='_blank'
						rel='noopener noreferrer'
						className='text-gray-400 hover:text-white transition-colors duration-300'
						whileHover={{ y: -3, color: "#fff" }}>
						<FaGithub size={24} />
					</motion.a>
					<motion.a
						href='https://www.linkedin.com/in/h-hlaing-swan-345956353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
						target='_blank'
						rel='noopener noreferrer'
						className='text-gray-400 hover:text-white transition-colors duration-300'
						whileHover={{ y: -3, color: "#fff" }}>
						<FaLinkedin size={24} />
					</motion.a>
					<motion.a
						href='https://www.facebook.com/profile.php?id=100036843302218&mibextid=ZbWKwL'
						target='_blank'
						rel='noopener noreferrer'
						className='text-gray-400 hover:text-white transition-colors duration-300'
						whileHover={{ y: -3, color: "#fff" }}>
						<FaFacebook size={24} />
					</motion.a>
				</div>

				{/* Copyright */}
				<div className='text-center text-gray-500 text-sm'>
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
