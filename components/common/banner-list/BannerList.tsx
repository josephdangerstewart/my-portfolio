import React from 'react';
import { BannerListRoot } from './BannerList.styled';

export const BannerList: React.FC = ({ children }) => (
	<BannerListRoot>
		{children}
	</BannerListRoot>
);
