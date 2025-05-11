import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLightbulb, FaPaintBrush, FaCode } from "react-icons/fa";
import heroVD from "../assets/heroVd.mp4";

const words = ["Ideas", "Designs", "Concepts"];
const icons = [<FaLightbulb />, <FaPaintBrush />, <FaCode />];
// const Exp = [
//     {
//         title: "Year Of Experience",
//         value: 1,
//     }
// ]

const Hero = () => {
	const [currentWord, setCurrentWord] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentWord((prev) => (prev + 1) % words.length);
		}, 2000); // Change word every 2 seconds

		return () => clearInterval(interval);
	}, []);

	return (
		<section className='  '>
			<div className='container  px-4  md:pl-10 mt-20  md:absolute   top-50 left-0   '>
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='text-3xl md:text-5xl font-bold text-white mb-2'>
					Shaping{" "}
					<span className='relative inline-block h-[.9em] w-[8rem]'>
						<AnimatePresence mode='wait'>
							<motion.span
								key={currentWord}
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -50 }}
								transition={{ duration: 0.5 }}
								className='text-amber-500 absolute left-0 flex items-center gap-2'>
								{icons[currentWord]} {words[currentWord]}
							</motion.span>
						</AnimatePresence>
					</span>
				</motion.h1>
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className='text-3xl md:text-4xl font-bold text-white mb-2'>
					into Real Projects
				</motion.h1>
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					className='text-3xl md:text-4xl font-bold text-white mb-4'>
					that Deliver Results
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.8 }}
					className='text-md text-gray-300 mb-1'>
					Hi, I'm H.Hlaing Swan, a Frontend Developer based in Myanmar.
				</motion.p>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 1.0 }}
					className='text-lg text-gray-300 mb-8'>
					I specialize in creating responsive and user-friendly websites using
					React.js.
				</motion.p>
				{/* <button
					onClick={() => console.log("Clicked")}
					className='inline-block bg-white text-black font-semibold py-2 px-6 rounded shadow-md transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:shadow-lg active:scale-95'>
					See My Work
				</button> */}
			</div>

			<div className='w-full h-80vh hidden md:flex    '>
				<video
					src={heroVD}
					autoPlay
					loop
					muted
					className='w-full h-full'
				/>
			</div>
			<div className='absolute -bottom-28 left-0 bg-transparent w-full h-32'></div>
		</section>
	);
};

export default Hero;
