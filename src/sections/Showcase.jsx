import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "antd";

const projectDetails = {
	"Movie Platform": {
		vercel: "https://imdb-next-h-hlaing-swans-projects.vercel.app/",
	},
	"Arcane Website": {
		vercel: "https://arcane-game.vercel.app/",
	},
	"Snake Game": {
		vercel: "https://snake-game-black-eight.vercel.app/",
	},
	"E-Commerce Platform": {
		vercel: "https://e-shop-three-jet.vercel.app/	",
	},
	"Gaming Services": {
		vercel: "https://hhlaingswan.github.io/Gaming-Repository/",
	},
	"Travel Blog": {
		vercel: "https://hhlaingswan.github.io/Travel-Blog/",
	},
};

const projects = [
	{
		image: "/Movie-PJ/homeview.png",
		title: "Movie Platform",
		description:
			"A responsive movie browsing application with search functionality and dynamic content loading.",
		tech: "Next.js, API Integration, Responsive Design",
		detailImages: "/Movie-PJ/h2.png",
		type: "photo",
	},
	{
		image: "/Arcane/home.png",
		title: "Arcane Website",
		description:
			"Fan website for the Arcane series with character profiles and interactive elements.",
		tech: "React, CSS Animations, Styled Components",
		detailImages: "/Arcane/h1.png",
		type: "photo",
	},
	{
		image: "/Snake-Game/snake-game-demo.png",
		title: "Snake Game",
		description:
			"A classic snake game with high scores and customizable difficulty levels.",
		tech: "React, CSS Animations, Critical Rendering Path Optimization",
		preview: "/Snake-Game/SnakeGameDemo.mp4",
	},
	{
		image: "/Shopping/homeview.png",
		title: "E-Commerce Platform",
		description:
			"Full-featured shopping website with product filtering and cart functionality.",
		tech: "React, Context API, Tailwind CSS",
		detailImages: "/Shopping/detailview.png",
		type: "photo",
	},
	{
		image: "/Game-Pro/home.png",
		title: "Gaming Services",
		description:
			"Web application for gaming services with light/dark mode support, providing a platform for users to purchase and manage their gaming subscriptions.",
		tech: "HTML, CSS, JavaScript, Theme Switching",
		detailImages: "/Game-Pro/h4.png",
		type: "photo",
	},
	{
		image: "/Travel-Blog/home.png",
		title: "Travel Blog",
		description:
			"Responsive travel blog with automatic light/dark mode detection based on user preferences, providing comprehensive information about destinations and travel tips.",
		tech: "HTML, CSS, JavaScript, Media Queries, Theme Detection",
		detailImages: "/Travel-Blog/h5.png",
		type: "photo",
	},
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
			className='px-4 py-10 max-w-7xl mx-auto mt-3  '>
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
						className={`relative lg:h-auto min-h-80 rounded-lg shadow-lg overflow-hidden md:p-10 ${
							!isMobile ? "group" : "flex flex-col"
						}`}>
						<img
							src={project.image}
							alt={project.title}
							className={`w-full ${
								isMobile
									? "h-64 object-cover"
									: "h-full transition-transform duration-500 object-cover group-hover:scale-110"
							}`}
						/>
						{isMobile ? (
							<div className='p-6 bg-gray-800'>
								<h3 className='text-xl font-bold text-amber-400 mb-2'>
									{project.title}
								</h3>
								<p className='text-gray-100 mb-4 text-sm'>
									{project.description}
								</p>
								<div className='flex flex-wrap gap-2 mb-4'>
									{project.tech.split(", ").map((tech, i) => (
										<span
											key={i}
											className='bg-amber-500/30 text-amber-100 text-xs px-2 py-1 rounded'>
											{tech}
										</span>
									))}
								</div>
								<Button
									className='bg-amber-500/10 text-amber-400 hover:text-amber-300 border-amber-500/30 hover:border-amber-400 w-full'
									href={projectDetails[project.title].vercel}
									target='_blank'>
									Live Demo
								</Button>
							</div>
						) : (
							<>
								<div
									className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
								<div
									className={`absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300`}>
									<h3 className='md:text-xl text-md font-bold text-amber-400 md:mb-2'>
										{project.title}
									</h3>
									<p className='text-gray-100 md:mb-3 text-sm'>
										{project.description}
									</p>
									<div className='flex flex-wrap gap-2 items-center justify-between'>
										<div className='flex flex-wrap gap-2'>
											{project.tech.split(", ").map((tech, i) => (
												<span
													key={i}
													className='bg-amber-500/30 text-amber-100 text-xs px-2 py-1 rounded'>
													{tech}
												</span>
											))}
										</div>
										<Button
											className='hover:text-amber-300 group-hover:opacity-100 transition-opacity duration-300'
											href={projectDetails[project.title].vercel}
											target='_blank'>
											Live Demo
										</Button>
									</div>
								</div>
							</>
						)}
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Showcase;
