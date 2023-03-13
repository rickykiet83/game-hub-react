import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

import { BsChevronDown } from 'react-icons/bs';

export const SortSelector = () => {
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order by: Relevance
			</MenuButton>
			<MenuList>
				<MenuItem>Relevance</MenuItem>
				<MenuItem>Date added</MenuItem>
			</MenuList>
		</Menu>
	);
};
