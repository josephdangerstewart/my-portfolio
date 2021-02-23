import React, { useMemo, useCallback } from 'react';
import { EmojiTextContainer, EmojiTextEmoji, EmojiTextLabel } from './EmojiTextBlock.styled';
import useDimensions from 'react-use-dimensions';
import { Variants, useCycle } from 'framer-motion';

interface EmojiTextBlockProps {
	text: string;
}

export const EmojiTextBlock: React.FC<EmojiTextBlockProps> = ({ text }) => {
	const parsedText = useMemo(() => parseEmojiTextBlocks(text), [text]);

	return (
		<>
			{parsedText.map((block, index) => (
				<p key={index}>
					{block.map((content, index) => {
						if (typeof content === 'string') {
							return <span key={index}>{content}</span>;
						}

						return (
							<EmojiText
								emojiText={content}
								key={index}
							/>
						);
					})}
				</p>
			))}
		</>
	);
};

interface EmojiTextProps {
	emojiText: IEmojiText;
}

const textVariants: Variants = {
	rest: {
		opacity: 1,
	},
	hover: {
		opacity: 0,
	}
};

const emojiVariants: Variants = {
	rest: {
		opacity: 0,
	},
	hover: {
		opacity: 1,
	}
};

const EmojiText: React.FC<EmojiTextProps> = ({ emojiText }) => {
	const [ref, { width }] = useDimensions({ liveMeasure: false });
	const [animateState, cycleAnimateState] = useCycle('rest', 'hover');

	const handleOnTap = useCallback((event: PointerEvent) => {
		if (event.pointerType === 'mouse') {
			return;
		}

		cycleAnimateState();
	}, []);

	const emojiCount = !width ? 1 : Math.max(Math.floor(width / 40), 1);

	return (
		<EmojiTextContainer
			initial="rest"
			animate={animateState}
			whileHover="hover"
			onTap={handleOnTap}
		>
			<EmojiTextLabel variants={textVariants} ref={ref}>{emojiText.text}</EmojiTextLabel>
			<EmojiTextEmoji aria-hidden variants={emojiVariants}>{emojiText.emoji.repeat(emojiCount)}</EmojiTextEmoji>
		</EmojiTextContainer>
	);
};

interface IEmojiText {
	text: string;
	emoji: string;
}

function parseEmojiTextBlocks(text: string): (string | IEmojiText)[][] {
	return text
		.split(/\r?\n\r?\n/)
		.map(parseEmojiText);
}

function parseEmojiText(text: string): (string | IEmojiText)[] {
	return text
		.split(/(<[^\|]+\|[^>]+>)/g)
		.map(x => {
			const match = /<([^\|]+)\|([^>]+)>/g.exec(x);
			if (!match) {
				return x;
			}

			return {
				text: match[1],
				emoji: match[2],
			};
		});
}
