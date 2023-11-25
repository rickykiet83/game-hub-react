import { HStack, Image } from '@chakra-ui/react';

import ColorModeSwitch from './ColorModeSwitch';
import { Link } from 'react-router-dom';
import { SearchInput } from './SearchInput';
import logo from '../assets/logo.webp';

const NavBar = () => {
	return (
		<HStack padding='10px'>
			<Link to={'/'}>
				<Image src={logo} boxSize='60px' objectFit={'cover'} />
			</Link>
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
