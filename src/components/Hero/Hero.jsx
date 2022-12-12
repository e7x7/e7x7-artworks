import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';

import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroSection, HeroText, ButtonWrapper } from './HeroStyles';

import { useInView } from 'react-intersection-observer';

const Hero = () => {
	const { ref, inView } = useInView({
		rootMargin: '-80px',
	});
	return (
		<>
			<HeroSection ref={ref} id='hero'>
				<Container>
					<MainHeading>Lorem*7: Future Vision</MainHeading>
					<HeroText>
						Discover original art from independent artists around the world.
					</HeroText>
					<ButtonWrapper>
						{/*<Link to='/signup'>
							<Button big>Find Your Lorem</Button>
						</Link>*/}
					</ButtonWrapper>
				</Container>
			</HeroSection>
			<Navbar hide={inView} />
		</>
	);
};

export default Hero;
