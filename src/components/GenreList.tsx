import {
	Button,
	HStack,
	Heading,
	Image,
	List,
	ListItem,
	Spinner,
} from '@chakra-ui/react';

import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';
import useGenres from '../hooks/useGenres';

const GenreList = () => {
	const { data, isLoading, error } = useGenres();

	const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
	const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

	if (error) return null;

	if (isLoading) return <Spinner />;

	return (
		<List>
			<Heading fontSize='2xl' marginBottom='3'>
				Genres
			</Heading>
			{data?.results.map((genre) => (
				<ListItem key={genre.id} paddingY='5px'>
					<HStack>
						<Image
							boxSize='32px'
							borderRadius={8}
							src={getCroppedImageUrl(genre.image_background)}
						/>
						<Button
							textAlign='left'
							whiteSpace='normal'
							fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
							onClick={() => setSelectedGenreId(genre.id)}
							fontSize='lg'
							variant='link'
						>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
