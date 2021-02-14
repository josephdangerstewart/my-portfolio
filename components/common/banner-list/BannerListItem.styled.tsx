import styled from 'styled-components';

export const ListItem = styled.li`
	position: relative;
	padding: 2px 0 2px 32px;
	margin: 36px 0;

	p {
		margin: 0;
	}

	&:last-child {
		margin-bottom: 0;
	}
`;

export const ListItemBullet = styled.div`
	position: absolute;
	width: 8px;
	height: 100%;
	left: 0px;
	top: 0px;
	background-color: ${({ theme }) => theme.colors.primary};
	border-radius: 10px;
`;
