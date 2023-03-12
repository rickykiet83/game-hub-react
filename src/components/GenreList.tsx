import {
	Button,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
	Text,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';

import React from 'react';

interface Props {
	onSelectGenre: (genre: Genre) => void;
}

export default function GenreList({ onSelectGenre }: Props) {
	const { data, isLoading, error } = useGenres();

	if (error) return null;

	if (isLoading) return <Spinner />;
	return (
		<List>
			{data.map((genre) => (
				<ListItem key={genre.id} paddingY='5px'>
					<HStack>
						<Image
							boxSize='32px'
							borderRadius={8}
							src={genre.image_background}
						/>
						<Button
							fontSize='lg'
							variant={'link'}
							onClick={() => onSelectGenre(genre)}
						>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
}
