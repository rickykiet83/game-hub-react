import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react';

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
			<GridItem area='aside'>Asid</GridItem>
			<GridItem area='main'>Main</GridItem>
		</Grid>
	);
}

export default App;
