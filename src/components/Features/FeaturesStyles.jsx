import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
	dark,
	light,
	blue1,
	blue2,
	orange,
	grey1,
	grey2,
	grey3,
} from '../../data/GlobalData';

export const FeatureSection = styled.div`
	padding: 140px;
	position: relative;
	margin: 0 auto;
	background-color: ${({ inverse }) => (inverse ? light : '#073b6c')};
	@media screen and (min-width: 961px) {
		height: 93vh;
	}
	@media screen and (max-width: 768px) {
		padding: 140px 0px;
	}
`;

export const FeatureTitle = styled.h2`
	text-align: center;

	font-size: clamp(2.1rem, 7vw, 3rem);
	line-height: 1.06;
	letter-spacing: 0.4rem;
	margin: auto;
	color: ${({ inverse }) => (inverse ? dark : light)};
	@media screen and (max-width: 960px) {
		margin-top: -8px;
	}
`;

export const FeatureMainText = styled.p`
	text-align: center;
	font-size: clamp(1rem, 2vw, 1.2rem);
	margin: 2rem auto 0;
	width: 70%;
	color: ${({ inverse }) => (inverse ? dark : light)};

	@media screen and (max-width: 960px) {
		margin-top: 8px;
	}
`;

export const FeatureTextWrapper = styled(motion.div)`
	position: relative;
	padding: 0 0 20px;
	margin-bottom: 4rem;
	color: ${({ inverse }) => (inverse ? dark : light)};
`;

export const FeatureWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	/*margin-top: 4rem;*/
	grid-gap: 10rem;
	@media screen and (max-width: 960px) {
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 1rem;
		margin: -50px auto;
	}
`;

export const FeatureColumn = styled(motion.div)`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	margin: 0 -40px;
	@media (max-width: 960px) {
		margin: 0 40px;
	}
`;

export const FeatureImageWrapper = styled.div`
	margin-bottom: 1rem;
	border-radius: 50%;
	background-color: ${orange};
	padding: 7px;
	max-width: 147px;
	@media screen and (max-width: 768px) {
		max-width: 77px;
	}
`;

export const FeatureImage = styled.img`
	width: 100%;
	height: 100%;
`;

export const FeatureName = styled.h3`
	font-weight: 600;
	font-size: 1.3rem;

	overflow: auto;
	letter-spacing: -1px;
	color: ${({ inverse }) => (inverse ? dark : light)};

	@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 1.3px;
	}
`;
export const FeatureText = styled.p`
	margin: 1rem 0 auto;
	text-align: center;
	font-size: 0.9rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	color: #626881;
	color: ${({ inverse }) => (inverse ? '#626881' : '#bcbcbc')};

	@media screen and (max-width: 768px) {
		/*display: none;*/
		line-height: 1.3;
		width: 70%;
	}
`;
