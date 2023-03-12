import React, { useEffect, useState } from 'react';

import { Text } from '@chakra-ui/react';
import apiClient from '../services/api-client';
import useGames from '../hooks/useGames';

export default function GameGrid() {
	const { games, error } = useGames();

	return (
		<>
			{error && <Text>{error}</Text>}
			<ul>
				{games.map((game) => (
					<li key={game.id}>{game.name}</li>
				))}
			</ul>
		</>
	);
}
