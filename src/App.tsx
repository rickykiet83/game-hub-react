import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react';

import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';

function App() {
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
				<GenreList />
			</GridItem>
			<GridItem area='main'>
				<GameGrid />
			</GridItem>
		</Grid>
	);
}

export default App;
