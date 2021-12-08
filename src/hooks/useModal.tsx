import { useState } from "react";

// The useModal(initalState: boolean) hook is responsible for managing the state of the modal, making handling the component easier.

// v.1.2.0
// The hook returns an object that can, but doesn't need to be unstructured

// state: boolean --> Tells when the modal is active or inactive.

// setState: React.Dispatch<React.SetStateAction<boolean>> --> Set a modal state.

// handleOpen: () => void --> Makes the modal open.

// handleClose: () => void --> Makes the modal close.

export function useModal(initalState: boolean): {
	state: boolean,
  handleOpen: () => void,
  handleClose: () => void,
	setState: React.Dispatch<React.SetStateAction<boolean>>,
} {
	const [state, setState] = useState(initalState);

	function handleOpen() {
		setState(true);
	}

	function handleClose() {
		setState(false);
	}

	return {
    state,
    handleOpen,
    handleClose,
		setState
	};
}