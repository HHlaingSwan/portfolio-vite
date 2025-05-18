import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
	{
		image: "/Movie-PJ/homeview.png",
		title: "Movie Platform",
		description:
			"A responsive movie browsing application with search functionality and dynamic content loading.",
		tech: "React, API Integration, Responsive Design",
	},
	{
		image: "/Arcane/home.png",
		title: "Arcane Website",
		description:
			"Fan website for the Arcane series with character profiles and interactive elements.",
		tech: "React, CSS Animations, Styled Components",
	},
	{
		image: "/Snake-Game/snake-game-demo.png",
		title: "Snake Game",
		description:
			"A classic snake game with high scores and customizable difficulty levels.",
		tech: "React, CSS Animations, Critical Rendering Path Optimization",
		hoverShow: true,
		video: "/Snake-Game/SnakeGameDemo.mp4",
	},
	// {
	// 	image: "/Shopping/homeview.png",
	// 	title: "E-Commerce Platform",
	// 	description:
	// 		"Full-featured shopping website with product filtering and cart functionality.",
	// 	tech: "React, Context API, Tailwind CSS",
	// },
	// {
];

const Showcase = () => {
	const [isMobile, setIsMobile] = useState(false);

	// Check if device is mobile
	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		// Initial check
		checkIfMobile();

		// Add event listener for window resize
		window.addEventListener("resize", checkIfMobile);

		// Cleanup
		return () => window.removeEventListener("resize", checkIfMobile);
	}, []);

	return (
		<section
			id='projects'
			className='px-4 py-10 max-w-7xl mx-auto mt-3 '>
			{/* Content */}
			<div className='md:mb-8 mb-20 text-center '>
				<h2 className='text-3xl font-bold mb-2'>My Work Showcase</h2>
				<p className='text-gray-400 max-w-xl mx-auto'>
					A collection of recent projects, showcasing design, responsiveness,
					and creativity.
				</p>
			</div>

			{/* Photo Grid */}
			<div className='grid grid-cols-1 gap-20 md:gap-8'>
				{projects.map((project, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						className={`relative h-auto rounded-lg shadow-lg overflow-hidden  md:p-10 ${
							!isMobile ? "group" : ""
						}`}>
						<img
							src={project.image}
							alt={project.title}
							className={`w-full h-full object-cover ${
								!isMobile
									? "transition-transform duration-500 group-hover:scale-110"
									: "h-72"
							}`}
						/>
						<div
							className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent 
								${
									isMobile
										? "opacity-100"
										: "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
								}`}></div>
						<div
							className={`absolute bottom-0 left-0 right-0 p-6 
								${
									isMobile
										? "translate-y-0"
										: "transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
								}`}>
							<h3 className='md:text-xl text-md font-bold text-amber-400 md:mb-2'>
								{project.title}
							</h3>
							<p className='text-gray-100 md:mb-3 text-sm'>
								{project.description}
							</p>
							<div className='flex flex-wrap gap-2'>
								{project.tech.split(", ").map((tech, i) => (
									<span
										key={i}
										className='bg-amber-500/30 text-amber-100 text-xs px-2 py-1 rounded'>
										{tech}
									</span>
								))}
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Showcase;
