import React, { useState, useEffect } from "react";
import {
	motion,
	AnimatePresence,
	useScroll,
	useTransform,
} from "framer-motion";
import {
	FaLightbulb,
	FaPaintBrush,
	FaCode,
	FaArrowDown,
	FaDownload,
} from "react-icons/fa";
// import heroimg from "../assets/mobileView.jpg";

const words = ["Ideas", "Designs", "Concepts"];
const icons = [<FaLightbulb />, <FaPaintBrush />, <FaCode />];

const Hero = () => {
	const { scrollYProgress } = useScroll();
	const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
	const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

	const [currentWord, setCurrentWord] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentWord((prev) => (prev + 1) % words.length);
		}, 2500);
		return () => clearInterval(interval);
	}, []);

	return (
		<section
			id='home'
			className='relative h-screen w-full overflow-hidden'>
			{/* New Gradient Background */}
			<div className='absolute inset-0 z-0 bg-[var(--color-bg-primary)]' />
			<motion.div
				className='absolute inset-0 z-0 bg-[radial-gradient(circle_farthest-side_at_top_left,var(--color-accent)_10%,transparent_50%)] opacity-30'
				style={{ y: y1 }}
			/>
			<motion.div
				className='absolute inset-0 z-0 bg-[radial-gradient(circle_farthest-side_at_bottom_right,var(--color-accent)_10%,transparent_50%)] opacity-30'
				style={{ y: y2 }}
			/>

			{/* <div className='absolute inset-0 z-0'>
				<img
					src={heroimg}
					alt='Hero'
					className='block lg:hidden w-full h-full object-cover'
				/>
			</div> */}
			{/* Content - with centering and animation improvements */}
			<div className='relative z-10 flex flex-col justify-center items-center h-full text-center px-4'>
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='text-3xl md:text-4xl lg:text-6xl font-bold text-[var(--color-text-primary)] mb-4'>
					Shaping{" "}
					<span className='relative inline-block h-[1.2em] w-[9rem] md:w-[12rem]'>
						<AnimatePresence mode='wait'>
							<motion.span
								key={currentWord}
								initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
								animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
								exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
								transition={{ duration: 0.5 }}
								className='text-[var(--color-accent-light)] absolute left-0  flex items-center justify-center gap-2'>
								{icons[currentWord]} {words[currentWord]}
							</motion.span>
						</AnimatePresence>
					</span>
				</motion.h1>
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className='text-2xl md:text-3xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-2'>
					into Real Projects
				</motion.h1>
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					className='text-2xl md:text-3xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-6'>
					that Deliver Results
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.8 }}
					className='text-base md:text-lg lg:text-xl text-[var(--color-text-secondary)] mb-2 max-w-2xl'>
					Hi, I'm{" "}
					<span className='text-[var(--color-accent-light)] font-medium'>
						H.Hlaing Swan
					</span>
					, a Full-Stack Developer based in Myanmar.
				</motion.p>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 1.0 }}
					className='text-base md:text-lg lg:text-xl text-[var(--color-text-subtle)] mb-8 max-w-2xl'>
					I specialize in building complete web applications, from the user
					interface to the server-side logic.
				</motion.p>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 1.2 }}
					className='flex flex-col sm:flex-row items-center gap-6 mt-8'>
					<motion.button
						whileHover={{
							scale: 1.05,
							boxShadow: "0px 0px 20px var(--color-accent-shadow)",
						}}
						whileTap={{ scale: 0.95 }}
						className='bg-[var(--color-accent)] text-slate-900 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:bg-[var(--color-accent-darker)] flex items-center'
						onClick={() =>
							document
								.getElementById("projects")
								.scrollIntoView({ behavior: "smooth" })
						}>
						See My Work
						<FaArrowDown className='ml-2' />
					</motion.button>
					<motion.a
						href='/H.Hlaing_Swan_CV.pdf'
						download
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className='bg-transparent border-2 border-[var(--color-accent-light)] text-[var(--color-accent-light)] font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:bg-[var(--color-accent-light)] hover:text-slate-900 flex items-center'>
						Download CV
						<FaDownload className='ml-2' />
					</motion.a>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
