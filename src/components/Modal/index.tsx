import { ReactNode } from "react";

import { ModalGlobalStyled } from '../../styles/global';

import { 
	Container, 
	Content 
} from "./styles";

type ModalProps = {
	children: ReactNode;
	isOpen: boolean;
};

export function Modal({ children, isOpen }: ModalProps): JSX.Element {
	return (
		// Verify if state is true to show modal
		<>
			{isOpen && (
				<>
					<Container>
						<Content>
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
