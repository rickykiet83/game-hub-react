interface Props {
	rating: number;
}

import { Image, ImageProps } from '@chakra-ui/react';

import bullsEye from './../assets/bulls-eye.webp';
import meh from './../assets/meh.webp';
import thumbsUp from './../assets/thumbs-up.webp';

export const Emoji = ({ rating }: Props) => {
	if (rating < 3) return null;

	const emojiMap: { [key: number]: ImageProps } = {
		3: { src: meh, alt: 'meh', boxSize: '25px' },
		4: { src: bullsEye, alt: 'bullsEye', boxSize: '25px' },
		5: { src: thumbsUp, alt: 'thumbsUp', boxSize: '35px' },
	};

	return <Image {...emojiMap[rating]} marginTop='1' />;
};
