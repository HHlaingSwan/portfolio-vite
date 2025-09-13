import React, { useState } from "react";
import Hero from "./sections/Hero";
import TopBar from "./sections/TopBar";
import About from "./sections/About";
import Showcase from "./sections/Showcase";
import LogoSlide from "./sections/LogoSlide";
import MyExperience from "./sections/MyExperience";
import Footer from "./sections/Footer";
import ContactMe from "./sections/ContactMe";
import Introduction from "./components/Introduction";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
	const [ready, setReady] = useState(false);

	const handleReady = () => {
		setReady(true);
	};

	return (
		<>
			{!ready ? (
				<Introduction onReady={handleReady} />
			) : (
				<div className=''>
					<TopBar />
					<Hero />
					<About />
					<Showcase />
					<LogoSlide />
					<MyExperience />
					<ContactMe />
					<Footer />
					<ScrollToTopButton />
				</div>
			)}
		</>
	);
};

export default App;
