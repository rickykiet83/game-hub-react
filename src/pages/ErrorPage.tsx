import { Box, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import NavBar from '../components/NavBar';
import React from 'react';

export const ErrorPage = () => {
	const error = useRouteError();
	return (
		<>
			<NavBar />
			<Box padding={5}>
				<Heading>Oops</Heading>
				<Text>
					{isRouteErrorResponse(error)
						? 'This page does not exist.'
						: 'An unexpected error occurred.'}
				</Text>
			</Box>
		</>
	);
};
