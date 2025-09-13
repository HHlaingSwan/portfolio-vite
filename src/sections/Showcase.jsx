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
			className='px-4 py-16 max-w-7xl mx-auto overflow-hidden'>
			{/* Section Header */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className='text-center mb-12'>
				<h2 className='text-4xl font-bold mb-3'>My Work Showcase</h2>
				<p className='text-[var(--color-text-tertiary)] max-w-2xl mx-auto'>
					A collection of recent projects, showcasing my skills in front-end and
					back-end development.
				</p>
			</motion.div>

			{/* Projects Grid */}
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				{projects.map((project, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						className='group relative overflow-hidden rounded-2xl shadow-lg h-96'>
						{/* Image */}
						<img
							src={project.image}
							alt={project.title}
							className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
						/>

						{/* Content that slides up */}
						<div className='absolute inset-0 top-auto p-6 bg-gradient-to-t from-[var(--color-bg-primary)] via-[var(--color-bg-primary)]/80 to-transparent backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out'>
							<h3 className='text-2xl font-bold text-[var(--color-accent-light)] mb-2'>
								{project.title}
							</h3>
							<p className='text-[var(--color-text-subtle)] mb-4 text-sm'>
								{project.description}
							</p>
							<div className='flex flex-wrap gap-2 mb-4'>
								{project.tech.map((tech) => (
									<span
										key={tech}
										className='bg-[var(--color-accent-light)]/10 text-[var(--color-accent-subtle)] text-xs px-3 py-1 rounded-full'>
										{tech}
									</span>
								))}
							</div>
							{project.vercel && (
								<a
									href={project.vercel}
									target='_blank'
									rel='noopener noreferrer'
									className='inline-flex items-center font-medium text-[var(--color-accent-light)] hover:text-[var(--color-accent-lighter)] transition-colors duration-300 self-start mt-auto'>
									Live Demo
									<FiArrowRight className='ml-2' />
								</a>
							)}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Showcase;
