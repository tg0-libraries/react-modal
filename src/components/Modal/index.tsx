import { ModalGlobalStyled } from '../../styles/global';

import { 
	Container, 
} from "./styles";

export type ModalProps = {
	children?: React.ReactNode;
	isOpen: boolean;

	containerTag?: React.HTMLAttributes<HTMLDivElement>;
};

export function Modal({ 
	children, 
	isOpen,
	containerTag,
}: ModalProps) {
	return (
		// Verify if state is true to show modal
		<>
			{isOpen && (
				<>
					<Container {...containerTag}>
						<>
							{children}
						</>
					</Container>

					<ModalGlobalStyled />
				</>
			)}
		</>
	);
}
