import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBriefcase } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
	{
		position: "Full-Stack Developer",
		company: "MY DAY THU KYAWL CO.LTD",
		duration: "Sep 2024 - Present",
		description: [
			"Developed and maintained full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js) and Next.js.",
			"Designed and implemented RESTful APIs to support front-end functionality and data management.",
			"Collaborated with cross-functional teams to deliver high-quality software products.",
			"Integrated third-party services and APIs to extend application capabilities.",
		],
		technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
	},
	{
		position: "Web Developer Intern",
		company: "Company Name",
		duration: "Sep 2024 - Nov 2024",
		description: [
			"Gained hands-on experience with both front-end and back-end development.",
			"Assisted in building and maintaining client websites using HTML, CSS, JavaScript, and PHP.",
			"Contributed to the development of a full-stack project, learning about databases and server-side logic.",
			"Participated in code reviews and learned best practices for software development.",
		],
		technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "Git"],
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
			<div className='z-20 flex items-center  order-1 bg-slate-800  shadow-xl w-8 h-8  rounded-full'>
				<h1 className='mx-auto font-semibold text-lg text-slate-50'>
					{index + 1}
				</h1>
			</div>
			<div
				className={`order-1 w-full md:w-5/12 px-6 py-4 rounded-lg shadow-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50`}>
				<div className={`flex items-center mb-4`}>
					<div
						className={`w-12 h-12 bg-sky-700/20 rounded-full flex items-center justify-center text-sky-600 text-xl mr-4`}>
						<FaBriefcase />
					</div>
					<div>
						<h3 className='text-2xl font-bold text-slate-50'>{exp.position}</h3>
						<p className='text-sky-600 font-medium'>{exp.company}</p>
					</div>
				</div>
				<p className='text-slate-400 mb-4'>{exp.duration}</p>
				<ul className='list-disc list-inside mb-4 text-slate-300 space-y-2'>
					{exp.description.map((item, i) => (
						<li key={i}>{item}</li>
					))}
				</ul>
				<div className={`flex flex-wrap gap-2`}>
					{exp.technologies.map((tech, i) => (
						<span
							key={i}
							className='bg-slate-700/70 text-slate-50 text-xs px-3 py-1 rounded-full'>
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
			className='py-20 bg-slate-900/80 backdrop-blur-sm'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className='text-center mb-16'>
					<h2 className='text-4xl font-bold mb-3 text-slate-50'>My Experience</h2>
					<p className='text-slate-400 max-w-2xl mx-auto'>
						A timeline of my professional journey and the skills I've developed
						along the way.
					</p>
				</motion.div>

				<div className='relative wrap overflow-hidden p-4 md:p-10 h-full'>
					<div className='border-2-2 absolute border-opacity-20 border-slate-700 h-full border md:left-1/2 left-4'></div>
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
