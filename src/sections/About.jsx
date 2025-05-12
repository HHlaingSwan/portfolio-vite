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

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
	const containerRef = useRef(null);
	const timelineRef = useRef(null);

	// Set up GSAP animation for the timeline line
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

		// Cleanup function
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<section
			id='about'
			className='py-16 bg-gray-900'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className='text-center mb-12'>
					<h2 className='text-3xl font-bold mb-2'>About My Education</h2>
					<p className='text-gray-400 max-w-xl mx-auto'>
						My academic journey and the skills I've developed along the way
					</p>
				</motion.div>

				<div
					className='max-w-4xl mx-auto relative'
					ref={containerRef}>
					{/* Main timeline line that grows with scroll using GSAP */}
					<div
						ref={timelineRef}
						className='absolute left-[7px] top-[30px] bottom-0 w-1 bg-amber-500 origin-top'></div>

					{/* University Information */}
					<div className='mb-12 relative'>
						<div className='flex gap-6'>
							{/* Timeline dot */}
							<div className='relative'>
								<div className='w-4 h-4 rounded-full bg-amber-500 mt-2'></div>
							</div>

							{/* Content */}
							<div className='education-card bg-gray-800 p-6 rounded-lg shadow-lg flex-1'>
								<div className='flex items-center mb-4'>
									<div className='w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mr-4'>
										<FaUniversity className='text-gray-900 text-xl' />
									</div>
									<h3 className='text-xl font-bold'>My University</h3>
								</div>

								<div className='mb-4'>
									<h4 className='text-lg font-semibold text-amber-500'>
										University Name
									</h4>
									<p className='text-gray-300'>
										Bachelor of Science in Computer Science
									</p>
									<div className='flex items-center text-gray-400 mt-2'>
										<FaCalendarAlt className='mr-2' />
										<span>2019 - 2023</span>
									</div>
								</div>

								<p className='text-gray-300 mb-4'>
									During my time at [University Name], I developed a strong
									foundation in computer science principles, algorithms, and
									software development. I participated in various coding
									competitions and hackathons, which helped me apply theoretical
									knowledge to practical problems.
								</p>
							</div>
						</div>
					</div>

					{/* Skills and Courses */}
					<div className='mb-12 relative'>
						<div className='flex gap-6'>
							{/* Timeline dot */}
							<div className='relative'>
								<div className='w-4 h-4 rounded-full bg-amber-500 mt-2'></div>
							</div>

							{/* Content */}
							<div className='education-card bg-gray-800 p-6 rounded-lg shadow-lg flex-1'>
								<div className='flex items-center mb-4'>
									<div className='w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mr-4'>
										<FaCode className='text-gray-900 text-xl' />
									</div>
									<h3 className='text-xl font-bold'>Relevant Coursework</h3>
								</div>

								<div className='mb-4'>
									<h4 className='text-lg font-semibold text-amber-500'>
										Technical Courses
									</h4>
									<ul className='grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2'>
										{[
											"Logical Thinking & Problem Solving",
											"Object-Oriented Programming (java & php)",
											"Web Development (HTML, CSS, JS)",
											"Database Management Systems (sql & nosql)",
											"Mobile App Development(React Native Cross Platform)",
											"Knowledge Artificial Intelligence",
										].map((course, index) => (
											<li
												key={index}
												className='bg-gray-700 p-3 rounded-md text-gray-300 text-sm '>
												{course}
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>

					{/* Achievements */}
					<div className='mb-12 relative'>
						<div className='flex gap-6'>
							{/* Timeline dot */}
							<div className='relative'>
								<div className='w-4 h-4 rounded-full bg-amber-500 mt-2'></div>
							</div>

							{/* Content */}
							<div className='education-card bg-gray-800 p-6 rounded-lg shadow-lg flex-1'>
								<div className='flex items-center mb-4'>
									<div className='w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mr-4'>
										<FaGraduationCap className='text-gray-900 text-xl' />
									</div>
									<h3 className='text-xl font-bold'>Key Achievements</h3>
								</div>

								<ul className='list-disc list-inside text-gray-300 ml-2 space-y-1.5 '>
									<li>
										Completed a web development project, honing my skills in
										HTML, CSS, and JavaScript.(2023)
									</li>
									<li>Learned PHP hypertext preprocessor (2024)</li>
									<li>
										Logical Thinking And Problem Solving Certificate (2024)
									</li>
									<li>Relation Database Management System (2025)</li>
									<li>MongoDB:The World's Leading Database (2025)</li>
									<li>Java Programming(2025)</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Additional Information */}
					<div className='relative'>
						<div className='flex gap-6'>
							{/* Timeline dot */}
							<div className='relative'>
								<div className='w-4 h-4 rounded-full bg-amber-500 mt-2'></div>
							</div>

							{/* Content */}
							<div className='education-card bg-gray-800/50 p-6 rounded-lg flex-1'>
								<p className='text-gray-300'>
									Beyond my formal education, I'm committed to continuous
									learning through online courses, workshops, and personal
									projects. I believe in combining academic knowledge with
									real-world experience to create innovative solutions.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
