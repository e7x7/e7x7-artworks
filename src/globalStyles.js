import styled, { createGlobalStyle } from "styled-components";
import { light, dark, blue1, blue2, orange, grey1, grey2, grey3 } from './data/GlobalData'

const GlobalStyle = createGlobalStyle`
*{
	box-sizing: border-box;
	margin: 0; padding: 0;
	font-family: 'Space Grotesk', sans-serif;
	/*font-family: 'Krona One', sans-serif;*/

}`

export const Container = styled.div`
width: 100%;
max-width: 1330px;
margin: 0 auto;
padding: 0 48px;

/*border: 2px solid ${orange};*/
/* L8R??? */
@media screen and (max-width: 960px){
	padding: 0 30px;
}
`

export const Section = styled.div`
color: ${light};
padding: 160px;
background: ${({ inverse }) => (inverse ? light : dark)};
`

export const MainHeading = styled.h1`
font-size: clamp(2.3rem, 6vw, 4.5rem);
margin-bottom: 2rem;
color: ${({ inverse }) => (inverse ? dark : light)};
width: 100%;
letter-spacing: 4px;
text-align: center;
`
export const Button = styled.button`
background: none;
position: relative;
overflow: hidden;
white-space: nowrap;
cursor: pointer;
outline: none;
color: #fff;
font-weight: 600;
font-size: ${({ fontBig }) => (fontBig ? '24px' : '16px')};
padding: ${({ big }) => (big ? '14px 40px' : '10px 20px')};
border-radius: 4px;
border: 4px solid ${orange};
letter-spacing: 3px;
/*font-family: Space-Grotesk, sans-serif;*/

	&:before{
background: ${orange};
content:'';
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: -1;
transition: all 0.6s ease;
width: 102%;
height: 0%;
}

&:hover:before {
	height: 200%;
}
&:hover {
	z-index: 1;
	color: ${dark};
}
`

export default GlobalStyle