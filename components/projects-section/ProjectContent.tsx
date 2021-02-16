import React from 'react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

interface ProjectContentProps {
	content: string;
}

export const ProjectContent: React.FC<ProjectContentProps> = ({ content }) => {
	return (
		<motion.div layout>
			<ReactMarkdown>
				{content}
			</ReactMarkdown>
		</motion.div>
	);
};
