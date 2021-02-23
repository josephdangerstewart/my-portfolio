import React, { useCallback } from 'react';
import {
	ListItem,
	HoverTextContainer,
	HoverText,
} from './BannerListItem.styled';
import { Transition, Variants, useCycle } from 'framer-motion';

interface BannerListItemProps {
	text: string;
	hoverText: string | React.ReactNode;
}

const transition: Transition = {
	type: 'spring',
	mass: 0.1,
	stiffness: 200,
	velocity: 5,
	delayChildren: 0.2,
};

const containerVariants: Variants = {
	rest: {
		width: '8px',
	},
	hover: {
		width: '100%',
	}
};

const hoverTextVariants: Variants = {
	rest: {
		opacity: 0,
	},
	hover: {
		opacity: 1,
	}
};

export const BannerListItem: React.FC<BannerListItemProps> = ({
	text,
	hoverText,
}) => {
	const ariaLabel = typeof hoverText === 'string' ? `${text} - ${hoverText}` : text;
	const [animateState, cycleAnimateState] = useCycle('rest', 'hover');

	const handleOnTap = useCallback((event: PointerEvent) => {
		if (event.pointerType === 'mouse') {
			return;
		}

		cycleAnimateState();
	}, []);

	return (
		<ListItem initial="rest" animate={animateState} whileHover="hover" aria-label={ariaLabel} onTap={handleOnTap}>
			<p aria-hidden>{text}</p>
			<HoverTextContainer
				variants={containerVariants}
				transition={transition}
				aria-hidden
			>
				<HoverText variants={hoverTextVariants}>{hoverText}</HoverText>
			</HoverTextContainer>
		</ListItem>
	);
};
