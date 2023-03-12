import React, { useEffect, useState } from 'react';
import { SimpleGrid, Text } from '@chakra-ui/react';

import GameCard from './GameCard';
import useGames from '../hooks/useGames';

export default function GameGrid() {
	const { games, error } = useGames();

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
				padding='10'
				spacing={10}
			>
				{games.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</SimpleGrid>
		</>
	);
}
