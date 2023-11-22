import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';

import CriticScore from './CriticScore';
import { Emoji } from './Emoij';
import { Game } from '../hooks/useGames';
import { Link } from 'react-router-dom';
import PlatformIconList from './PlatformIconList';
import React from 'react';
import getCroppedImageUrl from '../services/image-url';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card>
			<Link to={'/games/' + game.slug}>
				<Image src={getCroppedImageUrl(game.background_image)} />
			</Link>
			<CardBody>
				<HStack justifyContent='space-between' marginBottom={3}>
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading fontSize='2xl'>
					<Link to={'/games/' + game.slug}>{game.name}</Link>
					<Emoji rating={game.rating_top} />
				</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
