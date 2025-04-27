import React, { useEffect, useRef } from 'react';
import HeroSection from './Home/components/HeroSection';
import HomeFAQs from './Home/components/HomeFAQ';
import ContactForm from './Home/components/ContactForm';
import MainFooter from './Home/components/MainFooter';
import InfoSection from './Home/components/InfoSection';
import FeaturesGrid from './Home/components/FeaturesGrid';

const Home: React.FC = () => {
	const contactRef = useRef(null);
	const aboutRef = useRef(null);
	const FqRef = useRef(null);
	const scrollToSection = (ref) => {
		ref.current.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		let lastScrollTop = 0; // Initialize lastScrollTop variable

		const handleScroll = () => {
			const hcf = document.querySelector(".hcf-profile");
			const scrollTop =
				document.documentElement.scrollTop || document.body.scrollTop;

			if (scrollTop > lastScrollTop) {
				if (hcf) {
					hcf.classList.add("hcf-profile-fixed");
				}
			} else if (scrollTop < lastScrollTop) {
				if (hcf) {
					hcf.classList.remove("hcf-profile-fixed");
				}
			}

			lastScrollTop = scrollTop;
		};


		// Add scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Cleanup the event listener on unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<>
			<div>
				<div className="">
					<HeroSection
						scrollToSection={scrollToSection}
						featuresRef={FqRef}
						contactRef={contactRef}
						aboutRef={aboutRef}
					/>
					{/* <div className='bg-white'>
						<ClaimLandingSection />
					</div> */}
					<div className='!bg-[#eff6ff] relative'>
						<FeaturesGrid />
					</div>
					<div className='!bg-white relative' ref={aboutRef}>
						<InfoSection />
					</div>
					<div className='relative bg-white' ref={FqRef}>
						<HomeFAQs />
					</div>
					<div className='bg-white relative' ref={contactRef}>
						<ContactForm />
					</div>
					 <div className='bg-white'>
						<MainFooter />
					</div> 
				</div>
			</div>
		</>
	);
};

export default Home;