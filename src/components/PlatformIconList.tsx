import {
	FaAndroid,
	FaApple,
	FaLinux,
	FaPlaystation,
	FaWindows,
	FaXbox,
} from 'react-icons/fa';
import { HStack, Icon, Text } from '@chakra-ui/react';

import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';
import { MdPhoneIphone } from 'react-icons/md';
import { Platform } from '../hooks/useGames';
import { SiNintendo } from 'react-icons/si';

interface Props {
	platforms: Platform[];
}
export default function PlatformIconList({ platforms }: Props) {
	const iconMap: { [key: string]: IconType } = {
		pb: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: SiNintendo,
		mac: FaApple,
		linux: FaLinux,
		ios: MdPhoneIphone,
		android: FaAndroid,
		web: BsGlobe,
	};

	return (
		<HStack margin={1}>
			{platforms.map((platform) => (
				<Icon as={iconMap[platform.slug]} color='gray.500' />
			))}
		</HStack>
	);
}
