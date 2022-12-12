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
import { Container, Section } from '../../globalStyles';

export const CollectionSection = styled(Section)`
	width: 100%;
	padding: 0px 0px;
	@media screen and (max-width: 768px) {
		/*display: none;*/
		/*width: 600px;*/
	}
`;

export const CollectionContainer = styled(Container)`
	max-width: 1330px;
	margin: 0 auto;
	padding: 0 64px;
`;

export const MasonryGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(440px, 2fr));
	grid-auto-rows: 400px;
	grid-auto-flow: dense;
	grid-gap: 10px;
	margin-top: 4rem;
	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 80%;
		margin: 0 auto;
		> a > img {
			max-height: 400px;
			object-position: center;
		}
	}
`;

export const CollectionImageWrapper = styled(motion.div)`
	display: flex;
	cursor: pointer;
	position: relative;
	overflow: hidden;

	&.wide {
		grid-column: span 2;
	}
	&.tall {
		grid-row: span 2;
	}
	&.big {
		grid-column: span 2;
		grid-row: span 2;
	}

	&:before {
		background: rgb(0, 0, 0, 0.71);
		content: 'find out more';
		display: flex;
		position: absolute;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		z-index: 1;
		transform: translateY(-100%);
		bottom: 0;
		color: white;
	}

	&:hover:before {
		transform: translateY(0);
		transition: transform 0.2s ease-in-out;
	}

	&:hover {
		> img {
			filter: blur(8px);
		}
	}
	@media screen and (max-width: 768px) {
		/*width: 666px;*/
		/*max-height: 400px;*/
		/*padding: 0 160px;*/
	}
`;

export const CollectionHeading = styled(motion.h2)`
	font-size: clamp(3.5rem, 10vw, 10rem);
	margin-bottom: 2rem;
	color: ${blue2};
	width: 100%;
	letter-spacing: 4px;
	-webkit-letter-spacing: 4px;
	-moz-letter-spacing: 4px;
	-ms-letter-spacing: 4px;
	text-align: center;
	text-transform: center;
	text-transform: capitalize;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 5px;
	object-position: bottom;
	display: inline-block;
	position: relative;
	opacity: 0.7;
`;
