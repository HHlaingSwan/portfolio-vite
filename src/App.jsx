import React from "react";
import Hero from "./sections/Hero";
import TopBar from "./sections/TopBar";
import About from "./sections/About";
import Showcase from "./sections/Showcase";
import LogoSlide from "./sections/LogoSlide";
import MyExperience from "./sections/MyExperience";
import Footer from "./sections/Footer";
import ContactMe from "./sections/ContactMe";

const App = () => {
	return (
		<>
			<div className=''>
				<TopBar />
				<Hero />
				<About />
				<Showcase />
				<LogoSlide />
				<MyExperience />
				<ContactMe />
				<Footer />
			</div>
		</>
	);
};

export default App;
