import React, { ReactNode } from "react";

import { ModalGlobalStyled } from '../../styles/global';

import { 
	Container, 
	Content 
} from "./styles";

type ModalProps = {
	children: ReactNode;
	isOpen: boolean;

	styles?: {
		container?: React.CSSProperties;
		content?: React.CSSProperties;
	};

	classeNames?: {
		container?: string;
		content?: string;
	};
};

export function Modal({ 
	children, 
	isOpen, 
	styles, 
	classeNames 
}: ModalProps): JSX.Element {
	return (
		// Verify if state is true to show modal
		<>
			{isOpen && (
				<>
					<Container className={classeNames?.container} style={styles?.container}>
						<Content className={classeNames?.content} style={styles?.content}>
							<>
								{children}
							</>
						</Content>
					</Container>

					<ModalGlobalStyled />
				</>
			)}
		</>
	);
}
