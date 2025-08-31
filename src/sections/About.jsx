import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
	FaGraduationCap,
	FaUniversity,
	FaCalendarAlt,
	FaCode,
} from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
	{
		icon: <FaUniversity />,
		title: "My University",
		subtitle: "Myanmar Technopreneur Academy - MTA",
		date: "2024 - 2025",
		description:
			"During my studies at Myanmar Technopreneur Academy (MTA), I built a solid foundation in computer science, mastering core principles, algorithms, and software development. I actively participated in coding competitions and hackathons, applying theoretical concepts to real-world challenges and enhancing my problem-solving abilities.",
	},
	{
		icon: <FaCode />,
		title: "Relevant Coursework",
		subtitle: "Technical Coursework",
		courses: [
			"Logical Thinking & Problem Solving",
			"Object-Oriented Programming (Java & PHP)",
			"Web Development (HTML, CSS, JavaScript)",
			"Database Management Systems (SQL & NoSQL)",
			"Mobile App Development (React Native, Cross Platform)",
			"Introduction to Artificial Intelligence",
		],
	},
	{
		icon: <FaGraduationCap />,
		title: "Key Achievements",
		achievements: [
			"Developed a complete web application, strengthening my skills in HTML, CSS, and JavaScript (2023).",
			"Acquired proficiency in PHP for dynamic web development (2024).",
			"Earned a certificate in Logical Thinking and Problem Solving (2024).",
			"Completed coursework in Relational Database Management Systems (2025).",
			"Mastered MongoDB, a leading NoSQL database (2025).",
			"Advanced my Java programming skills (2025).",
		],
	},
];

const About = () => {
	const containerRef = useRef(null);
	const timelineRef = useRef(null);

	useEffect(() => {
		const timeline = timelineRef.current;

		if (timeline && containerRef.current) {
			// Initial setup - hide the line
			gsap.set(timeline, { scaleY: 0 });

			// Create the animation that follows scroll
			gsap.to(timeline, {
				scaleY: 1,
				ease: "none",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 80%",
					end: "bottom 20%",
					scrub: 0.5,
					// markers: true, // Uncomment for debugging
				},
			});
		}

		// Animate education cards - modify this to ensure visibility
		const educationCards = document.querySelectorAll(".education-card");
		educationCards.forEach((card, index) => {
			// Set initial state to ensure visibility
			gsap.set(card, { opacity: 0, y: 50 });

			gsap.to(card, {
				opacity: 1,
				y: 0,
				duration: 0.8,
				scrollTrigger: {
					trigger: card,
					start: "top 85%",
					toggleActions: "play none none none",
				},
				delay: index * 0.2,
			});
		});

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<section
			id='about'
			className='py-20 bg-gray-900'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className='text-center mb-16'>
					<h2 className='text-4xl font-bold mb-3 text-white'>
						About My Education
					</h2>
					<p className='text-gray-400 max-w-2xl mx-auto'>
						Explore my academic background and the skills I've gained throughout
						my educational journey.
					</p>
				</motion.div>

				<div
					className='max-w-4xl mx-auto relative'
					ref={containerRef}>
					{/* Main timeline line that grows with scroll using GSAP */}
					<div
						ref={timelineRef}
						className='absolute left-[7px] top-[30px] bottom-0 w-1 bg-amber-500 origin-top'></div>

					{educationData.map((item, index) => (
						<div
							key={index}
							className='mb-12 pl-10 relative'>
							{/* Timeline Dot */}
							<div className='absolute -left-1 top-2 w-6 h-6 rounded-full border-2 border-amber-500 flex items-center justify-center'>
								<div className='w-4 h-4 rounded-full bg-amber-500'></div>
							</div>

							{/* Content Card */}
							<div className='education-card bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700/50 hover:border-amber-500/50 transition-colors duration-300'>
								<div className='flex items-center mb-4'>
									<div className='w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mr-4 text-amber-400 text-xl'>
										{item.icon}
									</div>
									<h3 className='text-2xl font-bold text-white'>
										{item.title}
									</h3>
								</div>

								{item.subtitle && (
									<div className='mb-4'>
										<h4 className='text-lg font-semibold text-amber-400'>
											{item.subtitle}
										</h4>
										{item.date && (
											<div className='flex items-center text-gray-400 mt-1'>
												<FaCalendarAlt className='mr-2' />
												<span>{item.date}</span>
											</div>
										)}
									</div>
								)}

								{item.description && (
									<p className='text-gray-300'>{item.description}</p>
								)}

								{item.courses && (
									<ul className='grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2'>
										{item.courses.map((course, i) => (
											<li
												key={i}
												className='bg-gray-700/70 p-3 rounded-md text-gray-300 text-sm'>
												{course}
											</li>
										))}
									</ul>
								)}

								{item.achievements && (
									<ul className='list-disc list-inside text-gray-300 space-y-2'>
										{item.achievements.map((achievement, i) => (
											<li key={i}>{achievement}</li>
										))}
									</ul>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;
