import React, { useMemo } from 'react';

interface EmojiTextBlockProps {
	text: string;
}

export const EmojiTextBlock: React.FC<EmojiTextBlockProps> = ({ text }) => {
	const parsedText = useMemo(() => parseEmojiTextBlocks(text), [text]);

	return (
		<>
			{parsedText.map(block => (
				<p>
					{block.map(content => {
						if (typeof content === 'string') {
							return <span>{content}</span>;
						}

						return (
							<EmojiText
								emojiText={content}
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

const EmojiText: React.FC<EmojiTextProps> = ({ emojiText }) => (
	<span>{emojiText.text} ({emojiText.emoji})</span>
);

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
