import React from 'react';
import useTrailers from '../hooks/useTrailers';

interface Props {
	gameId: number;
}

export const GameTrailer = ({ gameId }: Props) => {
	const { data, error, isLoading } = useTrailers(gameId);

	if (isLoading) return null;
	if (error) throw error;

	const first = data?.results[0];
	return first ? (
		<video controls poster={first.preview} src={first.data[480]} />
	) : null;
};
