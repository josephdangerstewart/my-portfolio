import React from 'react';

interface BannerListItemProps {
	text: string;
	hoverText: string;
}

export const BannerListItem: React.FC<BannerListItemProps> = ({
	text,
	hoverText,
}) => (
	<li>
		<p>{text} ({hoverText})</p>
	</li>
);
