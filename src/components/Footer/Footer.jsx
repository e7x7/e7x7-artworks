import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaTwitter,
	FaLinkedin,
	FaGithub,
	FaTumblr,
} from 'react-icons/fa';
import {
	FooterContainer,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	SocialIcon,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
} from './FooterStyles';
import { footerData } from '../../data/FooterData';
import { websiteName } from '../../data/GlobalData';

import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
	return (
		<FooterContainer>
			<FooterLinksContainer>
				<FooterLinksWrapper>
					{footerData.map((footerItem, index) => (
						<FooterLinkItems key={index}>
							<FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
							{footerItem.links.map((link, linkIndex) => (
								<FooterLink key={linkIndex} to='/'>
									{link}
								</FooterLink>
							))}
						</FooterLinkItems>
					))}
				</FooterLinksWrapper>
			</FooterLinksContainer>
			<SocialMedia>
				<SocialMediaWrap>
					<SocialLogo to='/' onClick={scroll.scrollToTop}>
						<SocialIcon src='../../../c7logo2.svg' alt='' />
						{websiteName}
					</SocialLogo>
					<WebsiteRights>{websiteName}© 2022</WebsiteRights>
					{/*////////////////////////////////////*/}
					<SocialIcons>
						<SocialIconLink
							href='https://github.com/e7x7'
							target='blank'
							aria-label='Github'
						>
							<FaGithub />
						</SocialIconLink>{' '}
						<SocialIconLink
							href='https://www.linkedin.com/in/lucakuhs/'
							target='blank'
							aria-label='LinkedIn'
						>
							<FaLinkedin />
						</SocialIconLink>
						<SocialIconLink
							href='https://www.instagram.com/e7777777x7/'
							target='blank'
							aria-label='Insta'
						>
							<FaInstagram />
						</SocialIconLink>
						<SocialIconLink
							href='https://e7x7.tumblr.com/'
							target='blank'
							aria-label='Tumblr'
						>
							<FaTumblr />
							{/*  */}
						</SocialIconLink>
					</SocialIcons>
				</SocialMediaWrap>
			</SocialMedia>
		</FooterContainer>
	);
};

export default Footer;
