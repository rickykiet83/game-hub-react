import React, { useEffect, useState } from 'react';
import { SimpleGrid, Text } from '@chakra-ui/react';

import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';
import { Genre } from '../hooks/useGenres';
import useGames from '../hooks/useGames';

interface Props {
	selectedGenre: Genre | null;
}

export default function GameGrid({ selectedGenre }: Props) {
	const { data, error, isLoading } = useGames(selectedGenre);
	const skeletons = [1, 2, 3, 4, 5, 6];

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
				padding='10'
				spacing={3}
			>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeleton></GameCardSkeleton>
						</GameCardContainer>
					))}
				{data.map((game) => (
					<GameCardContainer key={game.id}>
						<GameCard game={game} />
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	);
}
