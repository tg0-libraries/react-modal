import { useState } from "react";

// The useModal() hook is responsible for managing the state of the modal, making handling the component easier.

// The hook returns an array with 3 exact positions

// Position[0] stateModal: boolean --> Tells when the modal is active or inactive.

// Position[1] handleOpenModal: () => void --> Makes the modal open.

// Position[2] handleCloseModal: () => void --> Makes the modal close.

export function useModal(): [
  modalState: boolean,
  handleOpenModal: () => void,
  handleCloseModal: () => void
] {
	const [modalState, setModalState] = useState(false);

	function handleOpenModal() {
		setModalState(true);
	}

	function handleCloseModal() {
		setModalState(false);
	}

	return [
    modalState,
    handleOpenModal,
    handleCloseModal
  ];
}
