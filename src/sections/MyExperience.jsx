import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBriefcase } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
	{
		position: "Frontend Developer",
		company: "MY DAY THU KYAWL CO.LTD",
		duration: "Sep 2024 - Present",
		description: [
			"Developed responsive web applications using React and Next.js",
			"Implemented state management solutions with Redux and Context API",
			"Collaborated with UI/UX designers to create intuitive user interfaces",
			"Integrated APIs to enhance functionality and data retrieval",
		],
		technologies: ["React", "Next.js", "Tailwind CSS", "Redux"],
	},
	{
		position: "Web Developer Intern",
		company: "Company Name",
		duration: "Sep 2024 - Nov 2024",
		description: [
			"Assisted in building and maintaining client websites",
			"Created reusable components for the company's component library",
			"Participated in code reviews and implemented feedback",
			"Learned and applied best practices for web accessibility",
		],
		technologies: ["HTML/CSS", "JavaScript", "Bootstrap", "Git"],
	},
];

const ExperienceCard = ({ exp, index }) => {
	const cardRef = useRef(null);

	useEffect(() => {
		const card = cardRef.current;
		const isOdd = index % 2 !== 0;
		const isMobile = window.innerWidth < 768;

		gsap.fromTo(
			card,
			{
				opacity: 0,
				x: isMobile ? -100 : isOdd ? 100 : -100,
			},
			{
				opacity: 1,
				x: 0,
				duration: 0.8,
				ease: "power3.out",
				scrollTrigger: {
					trigger: card,
					start: "top 85%",
					toggleActions: "play none none none",
				},
			}
		);
	}, [index]);

	const isOdd = index % 2 !== 0;

	return (
		<div
			ref={cardRef}
			className={`mb-8 flex justify-between items-center w-full ${
				isOdd ? "md:flex-row-reverse" : "md:flex-row"
			}`}>
			<div className='order-1 w-5/12 md:block  hidden'></div>
			<div className='z-20 flex items-center  order-1 bg-gray-800  shadow-xl w-8 h-8  rounded-full'>
				<h1 className='mx-auto font-semibold text-lg text-white'>
					{index + 1}
				</h1>
			</div>
			<div
				className={`order-1 w-full md:w-5/12 px-6 py-4 rounded-lg shadow-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50`}>
				<div className={`flex items-center mb-4`}>
					<div
						className={`w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-400 text-xl mr-4`}>
						<FaBriefcase />
					</div>
					<div>
						<h3 className='text-2xl font-bold text-white'>{exp.position}</h3>
						<p className='text-amber-400 font-medium'>{exp.company}</p>
					</div>
				</div>
				<p className='text-gray-400 mb-4'>{exp.duration}</p>
				<ul className='list-disc list-inside mb-4 text-gray-300 space-y-2'>
					{exp.description.map((item, i) => (
						<li key={i}>{item}</li>
					))}
				</ul>
				<div className={`flex flex-wrap gap-2`}>
					{exp.technologies.map((tech, i) => (
						<span
							key={i}
							className='bg-gray-700/70 text-white text-xs px-3 py-1 rounded-full'>
							{tech}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

const MyExperience = () => {
	return (
		<section
			id='experience'
			className='py-20 bg-gray-900'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className='text-center mb-16'>
					<h2 className='text-4xl font-bold mb-3 text-white'>My Experience</h2>
					<p className='text-gray-400 max-w-2xl mx-auto'>
						A timeline of my professional journey and the skills I've developed
						along the way.
					</p>
				</motion.div>

				<div className='relative wrap overflow-hidden p-4 md:p-10 h-full'>
					<div className='border-2-2 absolute border-opacity-20 border-gray-700 h-full border md:left-1/2 left-4'></div>
					{experiences.map((exp, index) => (
						<ExperienceCard
							key={index}
							exp={exp}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default MyExperience;
