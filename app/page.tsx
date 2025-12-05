"use client";
import Box from "./_components/Box";
import MyTechStack from "./_sections/MyTechStack";
import MyProjectsSection from "./_sections/MyProjectsSection";
import FadeOnScroll from "./_components/FadeOnScroll";
import HeroSection from "./_sections/HeroSection";
import AboutMe from "./_sections/AboutMe";
import MyDivider from "./_components/MyDivider";
function Page() {
	return (
		<>
			<Box>
				<HeroSection />
			</Box>
			<MyDivider size={1200} />
			<AboutMe />
			<MyDivider size={1200} />
			<FadeOnScroll>
				<MyProjectsSection />
			</FadeOnScroll>
			<MyDivider size={1200} />
			<MyTechStack />
		</>
	);
}

export default Page;
