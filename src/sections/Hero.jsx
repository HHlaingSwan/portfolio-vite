import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLightbulb, FaPaintBrush, FaCode } from "react-icons/fa";
import heroVd from "../assets/heroVd.mp4";
import heroimg from "../assets/mobileView.jpg";

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
			<div className='absolute inset-0 z-0'>
				<div className='absolute inset-0 hidden bg-slate-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.15),rgba(255,255,255,0))] lg:block' />
				<img
					src={heroimg}
					alt='Hero'
					className='block lg:hidden w-full h-full object-cover'
				/>
				{/* Overlay */}
				<div className='absolute inset-0 bg-black/30 bg-opacity-90'></div>
			</div>

			{/* Content */}
			<div className='relative z-10 flex flex-col justify-center md:items-center items-start ml-6  h-full   md:text-center'>
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='text-3xl md:text-4xl lg:text-6xl font-bold text-slate-50 mb-4'>
					Shaping{" "}
					<span className='relative inline-block h-[1em] w-[8rem]'>
						<AnimatePresence mode='wait'>
							<motion.span
								key={currentWord}
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -50 }}
								transition={{ duration: 0.5 }}
								className='text-sky-500 absolute left-0 flex items-center gap-2'>
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
					className='text-base md:text-lg lg:text-xl text-slate-200 mb-2'>
					Hi, I'm <span className='text-sky-500'>H.Hlaing Swan</span>, a
					Frontend Developer based in Myanmar.
				</motion.p>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 1.0 }}
					className='text-base md:text-lg lg:text-xl text-slate-300 mb-8'>
					I specialize in creating responsive and user-friendly websites using
					React.js.
				</motion.p>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className='bg-sky-500 text-black font-semibold py-2 px-8 rounded shadow-lg transition-all duration-300 hover:bg-black hover:text-sky-500 border border-sky-500'
					onClick={() =>
						window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
					}>
					See My Work
				</motion.button>
			</div>
		</section>
	);
};

export default Hero;
