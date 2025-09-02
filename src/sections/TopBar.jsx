import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TopBar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	// Navigation links
	const navLinks = [
		{ name: "Home", href: "#home" },
		{ name: "About", href: "#about" },
		{ name: "Experience", href: "#experience" },
		{ name: "Projects", href: "#projects" },
		{ name: "Contact", href: "#contact" },
	];

	// Handle scroll effect
	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 10;
			if (isScrolled !== scrolled) {
				setScrolled(isScrolled);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrolled]);

	// Close mobile menu when clicking a link
	const handleLinkClick = () => {
		setMobileMenuOpen(false);
	};

	const handleGetInTouchClick = () => {
		const contactSection = document.getElementById("contact");
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: "smooth" });
		}
		setMobileMenuOpen(false); // Close mobile menu if open
	};

	return (
		<>
			{/* Desktop Navigation */}
			<motion.div
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5 }}
				className={`fixed top-0 left-0 right-0 z-50 mx-auto my-5 max-w-6xl  px-4 ${
					scrolled ? "bg-black/10 backdrop-blur-xl shadow-lg" : "bg-transparent"
				} transition-all duration-300 rounded-full h-18 hidden md:flex justify-between items-center`}>
				{/* Logo */}
				<div className='flex items-center'>
					<motion.div
						whileHover={{ rotate: 360 }}
						transition={{ duration: 0.5 }}
						className='w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-black font-bold text-xl mr-3'>
						H
					</motion.div>
					<span className='text-slate-50 font-bold hidden lg:inline text-xl'>
						Hlaing Swan
					</span>
				</div>

				{/* Navigation */}
				<nav>
					<ul className='flex space-x-8'>
						{navLinks.map((link, index) => (
							<motion.li
								key={index}
								whileHover={{ y: -2 }}
								transition={{ type: "spring", stiffness: 300 }}>
								<a
									href={link.href}
									className='text-slate-300 hover:text-sky-500 transition-colors duration-300 relative group'>
									{link.name}
									<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 group-hover:w-full transition-all duration-300'></span>
								</a>
							</motion.li>
						))}
					</ul>
				</nav>

				{/* Contact button */}
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={handleGetInTouchClick}
					className='bg-sky-500 text-slate-900 px-5 py-2 rounded-full font-medium hover:bg-sky-400 transition-colors duration-300 cursor-pointer'>
					Get in Touch
				</motion.button>
			</motion.div>

			{/* Mobile Navigation */}
			<motion.div
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5 }}
				className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 ${
					scrolled
						? "bg-slate-900/90 backdrop-blur-md shadow-lg"
						: "bg-transparent"
				} transition-all duration-300 md:hidden flex justify-between items-center`}>
				{/* Mobile Logo */}
				<div className='flex items-center'>
					<div className='w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-black font-bold text-lg mr-2'>
						H
					</div>
					<span className='text-slate-50 font-bold text-lg'>Hlaing Swan</span>
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					className='text-slate-50 focus:outline-none'>
					<div className='w-8 h-8 flex flex-col justify-center items-center'>
						<span
							className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
								mobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
							}`}></span>
						<span
							className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
								mobileMenuOpen ? "opacity-0" : "opacity-100"
							}`}></span>
						<span
							className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
								mobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
							}`}></span>
					</div>
				</button>
			</motion.div>

			{/* Mobile Menu Overlay */}
			<motion.div
				initial={{ opacity: 0, height: 0 }}
				animate={{
					opacity: mobileMenuOpen ? 1 : 0,
					height: mobileMenuOpen ? "100vh" : 0,
				}}
				transition={{ duration: 0.3 }}
				className={`fixed top-14 left-0 w-full bg-slate-800/80 backdrop-blur-lg z-40 overflow-hidden md:hidden`}>
				<div className='container mx-auto px-4 py-8'>
					<ul className='flex flex-col space-y-6'>
						{navLinks.map((link, index) => (
							<motion.li
								key={index}
								initial={{ opacity: 0, x: -20 }}
								animate={{
									opacity: mobileMenuOpen ? 1 : 0,
									x: mobileMenuOpen ? 0 : -20,
								}}
								transition={{ duration: 0.3, delay: index * 0.1 }}>
								<a
									href={link.href}
									onClick={handleLinkClick}
									className='text-slate-200 hover:text-sky-500 transition-colors duration-300 text-2xl font-medium block'>
									{link.name}
								</a>
							</motion.li>
						))}
					</ul>

					<motion.button
						initial={{ opacity: 0, y: 20 }}
						animate={{
							opacity: mobileMenuOpen ? 1 : 0,
							y: mobileMenuOpen ? 0 : 20,
						}}
						transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
						whileTap={{ scale: 0.95 }}
						className='bg-sky-500 text-slate-900 px-6 py-3 rounded-full font-medium hover:bg-sky-400 transition-colors duration-300 mt-10 w-full cursor-pointer'>
						Get in Touch
					</motion.button>
				</div>
			</motion.div>
		</>
	);
};

export default TopBar;
