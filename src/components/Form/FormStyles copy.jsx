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

export const FormSection = styled.div`
	background-color: ${dark};
`;

export const FormContainer = styled.div`
	padding: 32px;
	padding-bottom: 0;
`;
export const FormColumn = styled.div`
	padding: 50px;
	background: ${light};
	border: 3px solid ${blue2};
	flex: 1;
	max-width: 660px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		max-width: 91% !important;
		flex-basis: 100%;
	}
	@media (max-width: 440px) {
		padding: 32px 16px;
	}
	/*img {
		@media screen and (max-width: 768px) {
			display: none;
		}
	}*/
`;
export const FormTitle = styled.h1`
	color: ${blue2};
	margin-bottom: 10px;
	margin-top: -32px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
`;
export const FormRow = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
`;

export const FormWrapper = styled.form`
	padding-top: 0;
	width: 100%;
`;

export const FormMessage = styled(motion.div)`
	color: ${({ error }) => (error ? 'red' : 'green')};
	padding: 5px;
	text-align: center;
	margin-top: 1rem;
`;

export const FormInputRow = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: stretch;
	margin-bottom: 1.4rem;

	> p {
		font-size: 0.8rem;
		margin-top: 0.5rem;
		color: #f00e0e;
	}
`;
export const FormInput = styled.input`
	display: block;
	padding-left: 10px;
	outline: none;
	border-radius: 2px;
	height: 40px;
	width: 100%;
	border: none;
	border-bottom: 3px solid ${grey1};
	font-size: 1rem;
`;

export const FormLabel = styled.label`
	display: inline-block;
	font-size: 0.9rem;
	margin-bottom: 0.3rem;
	color: ${light};
`;
export const FormImgWrapper = styled.div`
	max-width: 555px;
	display: flex;
	justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;
export const FormImg = styled.img`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	max-height: 500px;
`;

export const FormButton = styled.button`
	border-radius: 4px;
	background: none;
	margin-top: 1.5rem;
	white-space: nowrap;
	outline: none;
	width: 100%;
	font-size: 1.4rem;
	padding: 5px 15px;
	cursor: pointer;
	position: relative;
	overflow: hidden;

	&:hover {
		color: ${light};
		transition: background-color 0.4s ease-in;
		background-color: ${dark};
	}
`;
