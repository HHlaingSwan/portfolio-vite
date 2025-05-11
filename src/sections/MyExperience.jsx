import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const experiences = [
	{
		position: "Frontend Developer",
		company: "Tech Solutions Inc.",
		duration: "Jan 2022 - Present",
		description: [
			"Developed responsive web applications using React and Next.js",
			"Implemented state management solutions with Redux and Context API",
			"Collaborated with UI/UX designers to create intuitive user interfaces",
			"Optimized application performance and reduced load times by 40%",
		],
		technologies: ["React", "Next.js", "Tailwind CSS", "Redux"],
	},
	{
		position: "Web Developer Intern",
		company: "Digital Creations",
		duration: "Jun 2021 - Dec 2021",
		description: [
			"Assisted in building and maintaining client websites",
			"Created reusable components for the company's component library",
			"Participated in code reviews and implemented feedback",
			"Learned and applied best practices for web accessibility",
		],
		technologies: ["HTML/CSS", "JavaScript", "Bootstrap", "Git"],
	},
	{
		position: "Freelance Developer",
		company: "Self-employed",
		duration: "2020 - 2021",
		description: [
			"Designed and developed websites for small businesses",
			"Implemented e-commerce solutions using modern technologies",
			"Provided ongoing maintenance and support for clients",
			"Managed project timelines and client expectations",
		],
		technologies: ["React", "MongoDB", "Express", "Node.js"],
	},
];

const MyExperience = () => {
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
					start: "top 80%", // Start animation when the top of the section hits 80% from the top of viewport
					end: "bottom 20%", // End animation when the bottom of the section hits 20% from the top of viewport
					scrub: 0.5, // Smooth animation that follows scroll with a slight delay
					// markers: true, // Uncomment for debugging
				},
			});
		}

		// Cleanup function
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<section className='py-16'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className='text-center mb-12'>
					<h2 className='text-3xl font-bold mb-2'>My Experience</h2>
					<p className='text-gray-400 max-w-xl mx-auto'>
						A timeline of my professional journey and the skills I've developed
						along the way
					</p>
				</motion.div>

				<div
					className='max-w-4xl mx-auto relative'
					ref={containerRef}>
					{/* Main timeline line that grows with scroll using GSAP */}
					<div
						ref={timelineRef}
						className='absolute left-[7px] top-[30px] bottom-0 w-1 bg-amber-500 origin-top'></div>

					{experiences.map((exp, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: 0 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className='mb-12 relative'>
							<div className='flex gap-6'>
								{/* Timeline dot with animation */}
								<motion.div
									className='relative'
									initial={{ scale: 0 }}
									whileInView={{ scale: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}>
									<div className='w-4 h-4 rounded-full bg-amber-500 mt-2'></div>
								</motion.div>

								{/* Content */}
								<div className='bg-gray-900 rounded-lg p-6 shadow-lg flex-1 relative overflow-hidden hover:shadow-amber-500/20 hover:shadow-lg transition-all duration-300'>
									<div className='flex flex-col md:flex-row md:justify-between md:items-center mb-4'>
										<div>
											<h3 className='text-xl font-bold text-white'>
												{exp.position}
											</h3>
											<p className='text-amber-400'>{exp.company}</p>
										</div>
										<p className='text-gray-400 mt-1 md:mt-0'>{exp.duration}</p>
									</div>

									<ul className='list-disc list-inside mb-4 text-gray-300'>
										{exp.description.map((item, i) => (
											<li
												key={i}
												className='mb-1'>
												{item}
											</li>
										))}
									</ul>

									<div className='flex flex-wrap gap-2'>
										{exp.technologies.map((tech, i) => (
											<span
												key={i}
												className='bg-gray-600 text-white text-xs px-3 py-1 rounded-full'>
												{tech}
											</span>
										))}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MyExperience;
