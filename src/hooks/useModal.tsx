import { useState } from "react";

// The useModal() hook is responsible for managing the state of the modal, making handling the component easier.

// v.1.2.0
// The hook returns an object that can, but doesn't need to be unstructured

// state: boolean --> Tells when the modal is active or inactive.

// handleOpen: () => void --> Makes the modal open.

// handleClose: () => void --> Makes the modal close.

export function useModal(): {
	state: boolean,
  handleOpen: () => void,
  handleClose: () => void
} {
	const [state, setModalState] = useState(false);

	function handleOpen() {
		setModalState(true);
	}

	function handleClose() {
		setModalState(false);
	}

	return {
    state,
    handleOpen,
    handleClose
	};
}