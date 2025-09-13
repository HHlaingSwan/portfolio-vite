import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import image from "../assets/undraw_designer_efwz.svg";
import { FaArrowDown } from "react-icons/fa";

const Introduction = ({ onReady }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [isContentVisible, setIsContentVisible] = useState(false);
	const [displayedText, setDisplayedText] = useState("");
	const fullText = "Assembling the pixels...";

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 3000); // Adjusted for typing animation

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		if (!isLoading) {
			// A short delay to allow the component to mount before starting the transition
			const visibilityTimer = setTimeout(() => {
				setIsContentVisible(true);
			}, 50);
			return () => clearTimeout(visibilityTimer);
		}
	}, [isLoading]);

	useEffect(() => {
		if (isLoading) {
			const intervalId = setInterval(() => {
				setDisplayedText((currentText) => {
					if (currentText.length < fullText.length) {
						return fullText.substring(0, currentText.length + 1);
					}
					clearInterval(intervalId);
					return currentText;
				});
			}, 110); // Typing speed in ms

			return () => {
				clearInterval(intervalId);
			};
		}
	}, [isLoading]);

	return (
		<div className='min-h-screen flex items-center justify-center flex-col bg-[var(--color-bg-primary)]'>
			{isLoading ? (
				<>
					<Loader />
					<div className='text-[var(--color-text-secondary)] text-2xl font-semibold mt-8 h-8 font-mono flex items-center justify-center'>
						<span>{displayedText}</span>
						<span className='cursor-blink ml-1'>|</span>
					</div>
				</>
			) : (
				<div
					className={`transition-all duration-500 ease-in-out ${
						isContentVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-4"
					}`}>
					<div className='w-96 h-96 rounded-md overflow-hidden flex items-center justify-center'>
						<img
							src={image}
							alt=''
						/>
					</div>
					<div className='text-center p-4'>
						<p className='text-[var(--color-text-secondary)] text-xl font-semibold mb-3'>
							Are You Ready To View?
						</p>
						<FaArrowDown className='text-[var(--color-text-tertiary)] mx-auto mb-3 h-5 w-5 animate-bounce' />
						<button
							onClick={onReady}
							className='bg-white cursor-pointer text-black px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:bg-gray-200 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300 animate-pulse hover:animate-none'>
							Ready
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Introduction;
