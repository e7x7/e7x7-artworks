import { useEffect, useState } from 'react';
import { Container, Section } from '../../globalStyles';

import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

import {
	CollectionSection,
	MasonryGrid,
	CollectionImageWrapper,
	Image,
	CollectionHeading,
	CollectionContainer,
} from './CollectionsSectionStyles';

import { CollectionsData } from '../../data/CollectionsData';

import Modal2 from '../Modal/Modal2';
import {
	ContentButton,
	ContentHeading,
	Img,
	ImgWrapper,
	Subtitle,
} from '../Content/ContentStyles';
import { Link } from 'react-router-dom';
import { ModalButton } from '../Modal/ModalStyles2';
/////////////////////////////////////////////////
const CollectionsSection = ({ inverse }) => {
	const animation = useAnimation();
	const [ref, inView] = useInView({ threshold: 0.2 });

	const [showModal, setShowModal] = useState(false);
	const [selectedImage, setSelectedImage] = useState(0);

	useEffect(() => {
		if (inView) {
			animation.start({ opacity: 1, scale: 1 });
		}
	}, [inView, animation]);

	const handleClick = (index) => {
		setShowModal(true);
		setSelectedImage(index);
	};
	return (
		<>
			<CollectionSection>
				<CollectionContainer>
					<CollectionHeading
						initial={{ opacity: 0, scale: 0.3 }}
						transition={{ duration: 0.4 }}
						animate={animation}
					>
						Find More Artworks
					</CollectionHeading>
					<MasonryGrid ref={ref}>
						{CollectionsData.map((item, index) => (
							<CollectionImageWrapper
								animate={animation}
								initial={{ opacity: 0, scale: 0.3 }}
								transition={{ duration: 0.8 }}
								className={item.class}
								key={index}
								onClick={() => handleClick(index)}
							>
								<Image src={item.img} />
							</CollectionImageWrapper>
						))}
					</MasonryGrid>
				</CollectionContainer>
			</CollectionSection>
			{/*  */}
			<Modal2 show={showModal} onHide={() => setShowModal(false)}>
				<ContentHeading inverse>
					*{CollectionsData[selectedImage].title}
				</ContentHeading>
				<ImgWrapper>
					<Img src={CollectionsData[selectedImage].img} alt='image' />
				</ImgWrapper>
				<Subtitle mt inverse>
					7777777
				</Subtitle>

				<Link to='signup'>
					<ModalButton
						inverse={inverse}
						//primary={primary}
						onClick={() => {
							console.log('sign up!');
						}}
					>
						SIGN UP
					</ModalButton>
				</Link>
			</Modal2>
		</>
	);
};

export default CollectionsSection;
