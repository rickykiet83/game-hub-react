import { GameQuery } from '../App';
import { Heading } from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import useGenres from '../hooks/useGenres';
import usePlatform from '../hooks/usePlatform';
interface Props {
	gameQuery: GameQuery;
}

export const GameHeading = ({ gameQuery }: Props) => {
	const genre = useGenre(gameQuery.genreId);

	const platform = usePlatform(gameQuery.platformId);

	const heading = `${platform?.name || ''}
	${genre?.name || ''}
	Games`;
	return (
		<Heading as='h1' marginY='5' fontSize='5xl'>
			{heading}
		</Heading>
	);
};
