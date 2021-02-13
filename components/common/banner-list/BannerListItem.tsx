import React from 'react';
import {
	ListItem,
	ListItemBullet,
} from './BannerListItem.styled';

interface BannerListItemProps {
	text: string;
	hoverText: string;
}

export const BannerListItem: React.FC<BannerListItemProps> = ({
	text,
	hoverText,
}) => (
	<ListItem>
		<p>{text} ({hoverText})</p>
		<ListItemBullet />
	</ListItem>
);
