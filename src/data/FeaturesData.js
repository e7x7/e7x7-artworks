import React from 'react';

import { GiPartyFlags, GiMicrophone } from 'react-icons/gi';
import { TiGroupOutline } from 'react-icons/ti';
const iconStyle = (Icon) => `<Icon size="3rem" color="red" />`;

export const featuresData = {
	title: 'Features',
	text: 'Purchase original art from independent artists around the world.',
	content: [
		{
			name: 'Support Artists',
			description: 'Buy directly from an artist, helping them to make a living doing what they love.',
			image: './assets/svg/11.svg',
		},
		{
			name: 'Diverse Selection',
			description: 'We choose unique and affordable art from thousands of artists around the world.',
			image: './assets/svg/4.svg',
		},
		{
			name: 'Risk Free',
			description: 'Secure transactions, free 14-day returns. Full peace of mind, guaranteed.',
			image: './assets/svg/10.svg',
		},
	],
};
