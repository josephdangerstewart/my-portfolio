import React from 'react';
import {
	ListItem,
	HoverTextContainer,
	HoverText,
} from './BannerListItem.styled';
import { Transition } from 'framer-motion';

interface BannerListItemProps {
	text: string;
	hoverText: string;
}

const variants = {
	rest: {
		width: '8px',
	},
	hover: {
		width: '100%',
	}
};

const transition: Transition = {
	type: 'spring',
	mass: 0.1,
	stiffness: 200,
	velocity: 5,
};

export const BannerListItem: React.FC<BannerListItemProps> = ({
	text,
	hoverText,
}) => (
	<ListItem initial="rest" animate="rest" whileHover="hover">
		<p>{text}</p>
		<HoverTextContainer
			variants={variants}
			transition={transition}
		>
			<HoverText>{hoverText}</HoverText>
		</HoverTextContainer>
	</ListItem>
);
