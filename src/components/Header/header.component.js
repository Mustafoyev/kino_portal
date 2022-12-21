import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
	const navigate = useNavigate();

	const [searchVal, setSearchVal] = useState('');

	useEffect(() => {
		if (searchVal.length > 0) {
			navigate('/search/' + searchVal);
		} else {
			navigate('/');
		}
	}, [searchVal]);

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
			<Input
				onChange={(evt) => setSearchVal(evt.target.value)}
				type='text'
				placeholder='Search film...'
			/>
		</StyledHeader>
	);
};
