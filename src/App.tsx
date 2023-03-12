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
		>
			<GridItem area='nav'>
				<NavBar />
			</GridItem>
			<Show above='lg'></Show>
			<GridItem area='aside'>
				<GenreList />
			</GridItem>
			<GridItem area='main'>
				<GameGrid />
			</GridItem>
		</Grid>
	);
}

export default App;
