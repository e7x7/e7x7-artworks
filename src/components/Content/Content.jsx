import { useEffect, useState } from 'react';
import { Container } from '../../globalStyles';
import {
	ContentSec,
	ContentRow,
	TextWrapper,
	TopLine,
	ContentHeading,
	ContentButton,
	Subtitle,
	ImgWrapper,
	Img,
	ContentColumn,
} from './ContentStyles';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';
import { ModalButton } from '../Modal/ModalStyles';

const Content = ({
	reverse,
	inverse,
	primary,
	topLine,
	headline,
	description,
	buttonLabel,
	img,
	alt,
	bigImage,
}) => {
	const [showModal, setShowModal] = useState(false);
	// FRAMERMOTION
	const initial = { opacity: 0, scale: 0.3 };
	const transition = { delay: 0.07, duration: 0.3 };
	const animation = useAnimation();
	// INVIEW
	const { ref, inView } = useInView({
		threshold: 0.2,
	});
	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				scale: 1,
			});
			//return;
		}
		//animation.start({
		//	opacity: 0,
		//	scale: 0.3,
		//});
	}, [inView, animation]);
	//

	return (
		<>
			<ContentSec inverse={inverse} ref={ref}>
				<Container>
					<ContentRow reverse={reverse}>
						<ContentColumn>
							{/* TEXT  + BUTTON */}
							<TextWrapper>
								<TopLine
									initial={initial}
									transition={{ ...transition, delay: 0.05 }}
									animate={animation}
								>
									{topLine.text}
								</TopLine>
								<ContentHeading
									initial={initial}
									transition={transition}
									animate={animation}
									inverse={inverse}
								>
									{headline}
								</ContentHeading>
								<Subtitle
									initial={initial}
									transition={{ ...transition, delay: 0.07 }}
									animate={animation}
									inverse={inverse}
								>
									{description}
								</Subtitle>
								{/* BUTTON */}
								<ContentButton
									initial={initial}
									transition={{ ...transition, delay: 0.1 }}
									animate={animation}
									inverse={inverse}
									primary={primary}
									onClick={() => {
										setShowModal(true);
									}}
								>
									{buttonLabel}
								</ContentButton>
							</TextWrapper>
							{/* TEXT  + BUTTON */}
						</ContentColumn>
						<ContentColumn
							initial={initial}
							transition={transition}
							animate={animation}
							bigImage={bigImage}
						>
							<ImgWrapper>
								<Img
									src={img}
									alt={alt}
									initial={{ rotate: 2 }}
									whileHover={{ rotate: 0, scale: 1.02 }}
									transition={{ duration: 0.5 }}
								/>
							</ImgWrapper>
						</ContentColumn>
					</ContentRow>
				</Container>
			</ContentSec>

			{/* MODAL */}
			<Modal
				inverse={inverse}
				show={showModal}
				onHide={() => setShowModal(false)}
			>
				<ContentHeading inverse={inverse}>{headline}</ContentHeading>
				<ImgWrapper>
					<Img src={img} alt={alt} />
				</ImgWrapper>
				<Subtitle inverse={inverse}>{description}</Subtitle>
				<Link to='signup'>
					<ModalButton
						//initial={initial}
						//animate={animation}
						inverse={inverse}
						primary={primary}
						onClick={() => {
							console.log('sign up!');
						}}
					>
						SIGN UP
					</ModalButton>
				</Link>
			</Modal>
		</>
	);
};

export default Content;
