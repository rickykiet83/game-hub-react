import React, { ReactNode } from 'react';

import { Box } from '@chakra-ui/react';

interface Props {
	children: ReactNode;
}

export default function GameCardContainer({ children }: Props) {
	return (
		<Box borderRadius={10} overflow='hidden'>
			{children}
		</Box>
	);
}
