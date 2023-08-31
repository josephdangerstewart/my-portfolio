import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
	SectionHeader,
	SectionRoot
} from '../common';
import { useElementInViewport, useLocalization } from '../hooks';
import { Grid } from './SkillsSection.styled';
import { ILocalizedSkill } from '../../localization/localization';

export const SkillsSection: React.FC = () => {
	const localization = useLocalization().skillsSection;

	return (
		<SectionRoot>
			<SectionHeader>{localization.title}</SectionHeader>
			<Grid>
				{localization.skills.map((skill, index) => (
					<SkillGridItem
						key={skill.skill}
						skill={skill}
						index={index}
					/>
				))}
			</Grid>
		</SectionRoot>
	);
};

interface SkillGridItemProps {
	skill: ILocalizedSkill;
	index: number;
}

function SkillGridItem({ skill, index }: SkillGridItemProps) {
	const [ref, isVisible] = useElementInViewport<HTMLParagraphElement>();

	const [hasBeenVisible, setHasBeenVisible] = useState(false);

	useEffect(() => {
		if (isVisible) {
			setHasBeenVisible(true);
		}
	}, [isVisible]);

	return (
		<motion.p initial={{ opacity: 0 }} ref={ref} animate={{ opacity: hasBeenVisible ? 1 : 0 }} transition={{ delay: 0.01 * index }}>
			{skill.skill}
		</motion.p>
	);
}
