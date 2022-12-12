import React from 'react';
import { Link } from 'react-router-dom';
import { infoData } from '../../data/InfoData';
import { Button } from '../../globalStyles';

import {
	InfoSection,
	BottomLine,
	Image,
	InfoWrapper,
	InfoNumber,
	InfoText,
	InfoDesc,
	InfoRow,
	InfoColumn,
	InfoHeading,
	InfoButton,
} from './InfoStyles';

const Info = ({ id }) => {
	const { headline, description, bottomLine } = infoData;

	return (
		<InfoSection id={id}>
			<InfoRow>
				<InfoColumn>
					<Image src='./assets/heromain1.jpg' alt='hero1' />
				</InfoColumn>
				<InfoColumn>
					<InfoWrapper>
						<InfoHeading>{headline}</InfoHeading>
						<InfoDesc>{description}</InfoDesc>
						<BottomLine>
							{bottomLine.map((el, index) => (
								<InfoColumn key={index}>
									<InfoNumber>{el.number}</InfoNumber>
									<InfoText>{el.numberText}</InfoText>
								</InfoColumn>
							))}
						</BottomLine>{' '}
						<Link to='/signup'>
							<InfoButton big>Sign Up for Beta</InfoButton>
						</Link>
					</InfoWrapper>
					{/*  */}
				</InfoColumn>
			</InfoRow>
		</InfoSection>
	);
};

export default Info;
