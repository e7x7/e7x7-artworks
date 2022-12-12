import Hero from '../components/Hero/Hero';
import { heroData } from '../data/HeroData';
import Info from '../components/Info/Info';

import Features from '../components/Features/Features';
import Content from '../components/Content/Content';
import CollectionsSection from '../components/CollectionsSection/CollectionsSection';

const HomePage = () => {
	return (
		<>
			<Hero />
			<Info id='about' />
			<Features id='features' />

			<div id='Collections'>
				<h1>Collections</h1>

				{heroData.map((contentData, index) => (
					<Content {...contentData} key={index} />
				))}
				<CollectionsSection />
			</div>
		</>
	);
};

export default HomePage;
