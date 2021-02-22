import React from 'react';
import ReactMarkdown from 'react-markdown';
import { motion, Variants } from 'framer-motion';
import { ContentRoot } from './ProjectContent.styled';

interface ProjectContentProps {
	content: string;
	isInitiallyOpened?: boolean;
}

const variants: Variants = {
	initialUnopened: {
		opacity: 0,
	},
	initialOpened: {
		opacity: 1,
	},
	reveal: {
		opacity: 1,
		transition: {
			delay: 0.5,
		}
	},
	exit: {
		opacity: 0,
	}
};

const Link: React.FC<{ href: string }> = ({ href, children }) => (
	<a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
);

const renderers = {
	link: Link,
};

export const ProjectContent: React.FC<ProjectContentProps> = ({ content, isInitiallyOpened }) => {
	return (
		<motion.div variants={variants} initial={isInitiallyOpened ? 'initialOpened' : 'initialUnopened'} animate="reveal" exit="exit">
			<ContentRoot>
				<ReactMarkdown renderers={renderers}>
					{content}
				</ReactMarkdown>
			</ContentRoot>
		</motion.div>
	);
};
