import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';
import { ContentButton } from '../Content/ContentStyles';

export const Background = styled(motion.div)`
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.877);
	top: 0;
	left: 0;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99;
`;

export const ModalWrapper = styled(motion.div)`
	box-shadow: 0 7px 77px rgba(228, 207, 207, 0.72);
	padding: 40px 30px;
	background-color: #ddd9d2;
	/*background: ${({ inverse }) => (inverse ? 'white' : '#333333')};*/

	color: #5eff00;
	display: flex;
	position: relative;
	align-items: center;
	flex-direction: column;
	border-radius: 10px;

	img {
		max-height: 49vh;
	}
`;
export const ModalButton = styled(ContentButton)`
	/*border: none;*/
	&:before {
		background: '#0077be';
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
		transition: all 0.6s ease;
		width: 0%;
		height: 100%;
	}

	&:hover:before {
		width: 200%;
	}

	&:hover {
		color: ${({ inverse }) => (inverse ? 'white' : 'black')};
	}
`;
export const CloseModalButton = styled(MdClose)`
	cursor: pointer;
	position: absolute;
	top: 20px;
	right: 32px;
	width: 32px;
	height: 32px;
	padding: 0;
	z-index: 10;
	color: #ffa30e;
`;

//export const ModalButton = styled(motion.button)`
//	height: 3rem;
//	padding: 16px 32px;
//	font-weight: 700;
//	font-size: 0.8rem;
//	line-height: 18px;
//	letter-spacing: 1.54px;
//	text-transform: uppercase;
//	cursor: pointer;
//	cursor: pointer;
//	white-space: nowrap;
//	position: relative;
//	overflow: hidden;
//	outline: none;
//	background: none;
//	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
//	padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
//	color: ${({ inverse }) => (inverse ? 'black' : 'white')};
//	border: 2px solid #ffbb4e;
//	border-radius: 4px;

//	&:before {
//		background: #ffbb4e;
//		content: '';
//		position: absolute;
//		top: 50%;
//		left: 50%;
//		transform: translate(-50%, -50%);
//		z-index: -1;
//		transition: all 0.6s ease;
//		width: 0%;
//		height: 100%;
//	}

//	&:hover:before {
//		width: 200%;
//	}

//	&:hover {
//		color: ${({ inverse }) => (inverse ? 'white' : 'black')};
//	}
//`;
