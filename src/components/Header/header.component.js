import { Input } from '../Input/input.component';
import {
	StyledHeader,
	StyledHeaderWrapper,
	StyledItem,
	StyledItemLink,
	StyledList,
	StyledLogo,
	StyledLogoImg,
	StyledNav,
} from './header.styles';

export const Header = () => {
	return (
		<StyledHeader>
			<StyledHeaderWrapper>
				<StyledLogo to={'/'}>
					<StyledLogoImg />
				</StyledLogo>
				<StyledNav>
					<StyledList>
						<StyledItem>
							<StyledItemLink to='/'>Home</StyledItemLink>
						</StyledItem>
						<StyledItem>
							<StyledItemLink to='/popular'>Popular</StyledItemLink>
						</StyledItem>
						<StyledItem>
							<StyledItemLink to='/upcoming'>Upcoming</StyledItemLink>
						</StyledItem>
					</StyledList>
				</StyledNav>
			</StyledHeaderWrapper>
			<Input type='text' placeholder='Search film...' />
		</StyledHeader>
	);
};
