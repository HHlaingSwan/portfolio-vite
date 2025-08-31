import React from "react";
import { motion } from "framer-motion";
import {
	FaReact,
	FaJava,
	FaDatabase,
	FaNodeJs,
	FaHtml5,
	FaCss3Alt,
	FaGitAlt,
	FaDocker,
} from "react-icons/fa";
import {
	SiNextdotjs,
	SiMongodb,
	SiPrisma,
	SiTailwindcss,
	SiJavascript,
	SiTypescript,
	SiExpress,
	SiFirebase,
	SiRedux,
	SiGraphql,
	SiMysql,
	SiPostgresql,
	SiBootstrap,
	SiVite,
	SiReactquery,
	SiShadcnui,
} from "react-icons/si";

const LogoSlide = () => {
	const logos = [
		{ icon: <FaReact size={44} />, name: "React", color: "#61DAFB" },
		{ icon: <SiNextdotjs size={44} />, name: "Next.js", color: "#000000" },
		{ icon: <SiMongodb size={44} />, name: "MongoDB", color: "#47A248" },
		{ icon: <SiPrisma size={44} />, name: "Prisma", color: "#2D3748" },
		{ icon: <SiTailwindcss size={44} />, name: "Tailwind", color: "#06B6D4" },
		{ icon: <SiJavascript size={44} />, name: "JavaScript", color: "#F7DF1E" },
		{ icon: <SiTypescript size={44} />, name: "TypeScript", color: "#3178C6" },
		{ icon: <FaNodeJs size={44} />, name: "Node.js", color: "#339933" },
		{ icon: <SiExpress size={44} />, name: "Express", color: "#000000" },
		{ icon: <SiFirebase size={44} />, name: "Firebase", color: "#FFCA28" },
		{ icon: <SiRedux size={44} />, name: "Redux", color: "#764ABC" },
		{ icon: <SiMysql size={44} />, name: "MySQL", color: "#4479A1" },
		{ icon: <FaHtml5 size={44} />, name: "HTML5", color: "#E34F26" },
		{ icon: <FaCss3Alt size={44} />, name: "CSS3", color: "#1572B6" },
		{ icon: <SiBootstrap size={44} />, name: "Bootstrap", color: "#7952B3" },
		{ icon: <FaGitAlt size={44} />, name: "Git", color: "#F05032" },
		{ icon: <SiVite size={44} />, name: "Vite", color: "#646CFF" },
		{
			icon: <SiReactquery size={44} />,
			name: "TanStack Query",
			color: "#FF4154",
		},
		{ icon: <SiShadcnui size={44} />, name: "Shadcn UI", color: "#000000" },
	];

	const duplicatedLogos = [...logos, ...logos];

	return (
		<section className='py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden'>
			<div className='container mx-auto mb-12 text-center'>
				<h2 className='text-4xl font-extrabold text-white mb-4 tracking-tight'>
					Technologies I Work With
				</h2>
				<p className='text-gray-400 max-w-xl mx-auto text-lg'>
					I’m proficient in these modern technologies and frameworks.
				</p>
			</div>

			{/* Gradient overlays for fade effect */}
			<div className='pointer-events-none absolute top-0 left-0 h-full w-32 z-20 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent' />
			<div className='pointer-events-none absolute top-0 right-0 h-full w-32 z-20 bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent' />

			<div className='relative'>
				{/* First row */}
				<div className='flex overflow-hidden mb-8 py-4 relative'>
					<motion.div
						className='flex gap-10 px-4'
						animate={{ x: [0, -1600] }}
						transition={{
							x: {
								repeat: Infinity,
								repeatType: "loop",
								duration: 28,
								ease: "linear",
							},
						}}>
						{duplicatedLogos.map((logo, index) => (
							<motion.div
								key={index}
								className='flex flex-col items-center'
								animate={{
									y: [0, -8, 0],
								}}
								transition={{
									y: {
										repeat: Infinity,
										repeatType: "mirror",
										duration: 2 + (index % 3),
										ease: "easeInOut",
									},
								}}>
								<div
									className='w-16 h-16 flex items-center justify-center rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 mb-2 shadow-lg hover:shadow-amber-500/30 cursor-pointer'
									style={{ color: logo.color }}>
									<motion.div
										whileHover={{ scale: 1.18 }}
										transition={{ type: "spring", stiffness: 300 }}>
										{logo.icon}
									</motion.div>
								</div>
								<span className='text-xs font-medium text-gray-300'>
									{logo.name}
								</span>
							</motion.div>
						))}
					</motion.div>
				</div>

				{/* Second row */}
				<div className='flex overflow-hidden py-4 relative'>
					<motion.div
						className='flex gap-10 px-4'
						animate={{ x: [-1600, 0] }}
						transition={{
							x: {
								repeat: Infinity,
								repeatType: "loop",
								duration: 28,
								ease: "linear",
							},
						}}>
						{duplicatedLogos
							.slice()
							.reverse()
							.map((logo, index) => (
								<motion.div
									key={index}
									className='flex flex-col items-center'
									animate={{
										y: [0, 8, 0],
									}}
									transition={{
										y: {
											repeat: Infinity,
											repeatType: "mirror",
											duration: 2 + (index % 4),
											ease: "easeInOut",
										},
									}}>
									<div
										className='w-16 h-16 flex items-center justify-center rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 mb-2 shadow-lg hover:shadow-amber-500/30 cursor-pointer'
										style={{ color: logo.color }}>
										<motion.div
											whileHover={{ scale: 1.18 }}
											transition={{ type: "spring", stiffness: 300 }}>
											{logo.icon}
										</motion.div>
									</div>
									<span className='text-xs font-medium text-gray-300'>
										{logo.name}
									</span>
								</motion.div>
							))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default LogoSlide;
