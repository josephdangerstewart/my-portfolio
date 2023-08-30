import React from 'react';
import { BannerListRoot } from './BannerList.styled';

export const BannerList: React.FC<React.PropsWithChildren<Record<string, unknown>>> = ({ children }) => (
	<BannerListRoot>
		{children}
	</BannerListRoot>
);
