import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLightbulb, FaPaintBrush, FaCode, FaArrowDown } from "react-icons/fa";
// import heroimg from "../assets/mobileView.jpg";

const words = ["Ideas", "Designs", "Concepts"];
const icons = [<FaLightbulb />, <FaPaintBrush />, <FaCode />];

const Hero = () => {
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
			<div className='absolute inset-0 z-0 bg-gradient-to-br from-slate-900 to-sky-900' />
			<div className='absolute inset-0 z-0 bg-[radial-gradient(circle_farthest-side_at_top_left,#0369a1_10%,transparent_50%)] opacity-30' />
			<div className='absolute inset-0 z-0 bg-[radial-gradient(circle_farthest-side_at_bottom_right,#0369a1_10%,transparent_50%)] opacity-30' />

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
					className='text-3xl md:text-4xl lg:text-6xl font-bold text-slate-50 mb-4'>
					Shaping{" "}
					<span className='relative inline-block h-[1.2em] w-[9rem] md:w-[12rem]'>
						<AnimatePresence mode='wait'>
							<motion.span
								key={currentWord}
								initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
								animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
								exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
								transition={{ duration: 0.5 }}
								className='text-sky-600 absolute left-0  flex items-center justify-center gap-2'>
								{icons[currentWord]} {words[currentWord]}
							</motion.span>
						</AnimatePresence>
					</span>
				</motion.h1>
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className='text-2xl md:text-3xl lg:text-5xl font-bold text-slate-50 mb-2'>
					into Real Projects
				</motion.h1>
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					className='text-2xl md:text-3xl lg:text-5xl font-bold text-slate-50 mb-6'>
					that Deliver Results
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.8 }}
					className='text-base md:text-lg lg:text-xl text-slate-200 mb-2 max-w-2xl'>
					Hi, I'm{" "}
					<span className='text-sky-600 font-medium'>H.Hlaing Swan</span>, a
					Frontend Developer based in Myanmar.
				</motion.p>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 1.0 }}
					className='text-base md:text-lg lg:text-xl text-slate-300 mb-8 max-w-2xl'>
					I specialize in creating responsive and user-friendly websites using
					React.js.
				</motion.p>
				<motion.button
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 1.2 }}
					whileHover={{
						scale: 1.05,
						boxShadow: "0px 0px 20px rgba(2, 132, 199, 0.5)",
					}}
					whileTap={{ scale: 0.95 }}
					className='bg-sky-700 text-slate-900 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:bg-sky-800 flex items-center'
					onClick={() =>
						document
							.getElementById("showcase")
							.scrollIntoView({ behavior: "smooth" })
					}>
					See My Work
					<FaArrowDown className='ml-2' />
				</motion.button>
			</div>
		</section>
	);
};

export default Hero;
