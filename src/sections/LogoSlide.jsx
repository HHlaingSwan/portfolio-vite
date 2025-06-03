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
		{ icon: <FaReact size={50} />, name: "React", color: "#61DAFB" },
		{ icon: <SiNextdotjs size={50} />, name: "Next.js", color: "#000000" },
		// { icon: <FaJava size={50} />, name: "Java", color: "#007396" },
		{ icon: <FaDatabase size={50} />, name: "SQL", color: "#336791" },
		{ icon: <SiMongodb size={50} />, name: "MongoDB", color: "#47A248" },
		{ icon: <SiPrisma size={50} />, name: "Prisma", color: "#2D3748" },
		{ icon: <SiTailwindcss size={50} />, name: "Tailwind", color: "#06B6D4" },
		{ icon: <SiJavascript size={50} />, name: "JavaScript", color: "#F7DF1E" },
		{ icon: <SiTypescript size={50} />, name: "TypeScript", color: "#3178C6" },
		// { icon: <FaNodeJs size={50} />, name: "Node.js", color: "#339933" },
		// { icon: <SiExpress size={50} />, name: "Express", color: "#000000" },
		{ icon: <SiFirebase size={50} />, name: "Firebase", color: "#FFCA28" },
		{ icon: <SiRedux size={50} />, name: "Redux", color: "#764ABC" },
		// { icon: <SiGraphql size={50} />, name: "GraphQL", color: "#E10098" },
		{ icon: <SiMysql size={50} />, name: "MySQL", color: "#4479A1" },
		// { icon: <SiPostgresql size={50} />, name: "PostgreSQL", color: "#336791" },
		{ icon: <FaHtml5 size={50} />, name: "HTML5", color: "#E34F26" },
		{ icon: <FaCss3Alt size={50} />, name: "CSS3", color: "#1572B6" },
		{ icon: <SiBootstrap size={50} />, name: "Bootstrap", color: "#7952B3" },
		{ icon: <FaGitAlt size={50} />, name: "Git", color: "#F05032" },
		{ icon: <FaDocker size={50} />, name: "Docker", color: "#2496ED" },
		{ icon: <SiVite size={50} />, name: "Vite", color: "#646CFF" },
		{
			icon: <SiReactquery size={50} />,
			name: "TanStack Query",
			color: "#FF4154",
		},
		{ icon: <SiShadcnui size={50} />, name: "Shadcn UI", color: "#000000" },
	];

	// Duplicate the logos array to create the infinite loop effect
	const duplicatedLogos = [...logos, ...logos];

	return (
		<section className='py-16 bg-gray-900 overflow-hidden'>
			<div className='container mx-auto mb-8 text-center'>
				<h2 className='text-3xl font-bold my-2'>Technologies I Work With</h2>
				<p className='text-gray-400 max-w-xl mx-auto'>
					I'm proficient in these modern technologies and frameworks
				</p>
			</div>

			<div className='relative'>
				{/* First row of logos - moving left with curved motion */}
				<div className='flex overflow-hidden mb-8 py-4 relative'>
					<motion.div
						className='flex gap-16 px-4'
						animate={{ x: [0, -2000] }}
						transition={{
							x: {
								repeat: Infinity,
								repeatType: "loop",
								duration: 30,
								ease: "linear",
							},
						}}>
						{duplicatedLogos.map((logo, index) => (
							<motion.div
								key={index}
								className='flex flex-col items-center'
								animate={{
									y: [0, -10, 0],
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
									className='w-20 h-20 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 mb-2 shadow-lg hover:shadow-xl'
									style={{ color: logo.color }}>
									{logo.icon}
								</div>
								<span className='text-sm font-medium text-gray-300'>
									{logo.name}
								</span>
							</motion.div>
						))}
					</motion.div>
				</div>

				{/* Second row of logos - moving right (in reverse order) with curved motion */}
				<div className='flex overflow-hidden py-4 relative'>
					<motion.div
						className='flex gap-16 px-4'
						animate={{ x: [-2000, 0] }}
						transition={{
							x: {
								repeat: Infinity,
								repeatType: "loop",
								duration: 30,
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
										y: [0, 10, 0],
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
										className='w-20 h-20 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 mb-2 shadow-lg hover:shadow-xl'
										style={{ color: logo.color }}>
										{logo.icon}
									</div>
									<span className='text-sm font-medium text-gray-300'>
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
