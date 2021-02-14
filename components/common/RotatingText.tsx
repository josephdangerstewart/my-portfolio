import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Container = styled.span<{ width: number; }>`
	display: inline-block;
	position: relative;
	border-bottom: 2px solid ${({ theme }) => theme.colors.text.body};
	width: ${({ width }) => width}px;
	margin: 0 8px;
	height: 36px;
`;

const Text = styled(motion.span)`
	display: block;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	text-align: center;
`;

interface RotatingTextProps {
	text: string[];

	/**
	 * @description The duration each word is displayed in seconds
	 */
	delay: number;

	width: number;
}

export const RotatingText: React.FC<RotatingTextProps> = ({
	text,
	width,
	delay,
}) => {
	const [index, setIndex] = useState(0);
	const timeout = useRef<NodeJS.Timeout>();
	const isMounted = useRef(true);

	useEffect(() => {
		const handleTimeout = () => {
			if (!isMounted.current) {
				return;
			}

			setIndex((prev) => {
				if (prev === text.length - 1) {
					return 0;
				} else {
					return prev + 1;
				}
			});
			timeout.current = setTimeout(handleTimeout, delay * 1000);
		};

		timeout.current = setTimeout(handleTimeout, delay * 1000);

		return () => clearTimeout(timeout.current);
	}, [text.length, delay]);

	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	const currentText = text[index];

	return (
		<Container width={width} aria-label={text[0]}>
			<AnimatePresence>
				<Text
					aria-hidden
					initial={{ translateY: -20, opacity: 0 }}
					animate={{ translateY: 0, opacity: 1 }}
					exit={{ translateY: 20, opacity: 0 }}
					key={currentText}
				>
					{currentText}
				</Text>
			</AnimatePresence>
		</Container>
	);
};
