import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import movieImage from "../assets/Movie-PJ/homeview.png";
import arcaneImage from "../assets/Arcane/home.png";
import snakeGameImage from "../assets/Snake-Game/snake-game-demo.png";

const projects = [
	{
		image: movieImage,
		title: "Movie Platform",
		description:
			"A responsive movie browsing application with search functionality and dynamic content loading.",
		tech: ["Next.js", "API Integration", "Responsive Design"],
		vercel: "https://imdb-next-h-hlaing-swans-projects.vercel.app/",
	},
	{
		image: arcaneImage,
		title: "Arcane Website",
		description:
			"Fan website for the Arcane series with character profiles and interactive elements.",
		tech: ["React", "CSS Animations", "Styled Components"],
		vercel: "https://arcane-game.vercel.app/",
	},
	{
		image: snakeGameImage,
		title: "Snake Game",
		description:
			"A classic snake game with high scores and customizable difficulty levels.",
		tech: ["React", "CSS Animations", "Critical Rendering Path Optimization"],
		vercel: "https://snake-game-black-eight.vercel.app/",
	},
];

const Showcase = () => {
	return (
		<section
			id='projects'
			className='px-4 py-16 max-w-7xl mx-auto'>
			{/* Section Header */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className='text-center mb-12'>
				<h2 className='text-4xl font-bold mb-3'>My Work Showcase</h2>
				<p className='text-gray-400 max-w-2xl mx-auto'>
					A collection of recent projects, showcasing design, responsiveness, and
					creativity.
				</p>
			</motion.div>

			{/* Projects Grid */}
			<div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-12'>
				{projects.map((project, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						className='relative group bg-gray-900/50 rounded-xl shadow-lg overflow-hidden border border-gray-800/50'>
						<div className='md:flex'>
							{/* Image Section */}
							<div className='md:w-1/2'>
								<img
									src={project.image}
									alt={project.title}
									className='w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-105'
								/>
							</div>

							{/* Content Section */}
							<div className='md:w-1/2 p-8 flex flex-col justify-center'>
								<h3 className='text-2xl font-bold text-amber-400 mb-3'>
									{project.title}
								</h3>
								<p className='text-gray-300 mb-4'>
									{project.description}
								</p>
								<div className='flex flex-wrap gap-2 mb-6'>
									{project.tech.map((tech) => (
										<span
											key={tech}
											className='bg-amber-500/20 text-amber-200 text-xs px-3 py-1 rounded-full'>
											{tech}
										</span>
									))}
								</div>
								{project.vercel && (
									<a
										href={project.vercel}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex items-center font-medium text-amber-400 hover:text-amber-300 transition-colors duration-300'>
										Live Demo
										<FiArrowRight className='ml-2' />
									</a>
								)}
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Showcase;