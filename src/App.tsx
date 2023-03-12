import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react';

import GameGrid from './components/GameGrid';
import { Genre } from './hooks/useGenres';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`, // 1024px
			}}
			templateColumns={{
				base: '1fr',
				lg: '200px 1fr',
			}}
		>
			<GridItem area='nav'>
				<NavBar />
			</GridItem>
			<Show above='lg'></Show>
			<GridItem area='aside' paddingX={5}>
				<GenreList
					selectedGenre={selectedGenre}
					onSelectGenre={(genre) => setSelectedGenre(genre)}
				/>
			</GridItem>
			<GridItem area='main'>
				<GameGrid selectedGenre={selectedGenre} />
			</GridItem>
		</Grid>
	);
}

export default App;
