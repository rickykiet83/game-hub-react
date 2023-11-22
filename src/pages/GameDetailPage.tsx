import { Heading, Spinner, Text } from '@chakra-ui/react';

import React from 'react';
import useGame from '../hooks/useGame';
import { useParams } from 'react-router-dom';

export const GameDetailPage = () => {
	const { slug } = useParams();
	const { data: game, isLoading, error } = useGame(slug!);
	if (isLoading) return <Spinner />;
	if (error || !game) throw error;

	return (
		<>
			<Heading>{game.name}</Heading>
			<Text>{game.description_raw}</Text>
		</>
	);
};
