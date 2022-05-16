/**
 * Modal component to toggle the maximized photo view/lightbox
 * @description - this modal will be triggered by a context dispatch
 */
import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useAppState } from '../../context/AppContext';
import { AppStateActions } from '../../context/AppStateActions';
import { ModalContent } from './Modal.style';

export const Modal = () => {
  const { appState, dispatch } = useAppState();
  const { modal } = appState;

  // Modal mounting and setup
  const modalRef = useRef<HTMLElement>(document.getElementById('modal'));
  const newElement = useRef<HTMLElement>(document.createElement('div'));

  useEffect(() => {
    if (modal.data !== null && modalRef.current) {
      modalRef.current.appendChild(newElement.current);
      console.log('modal has been attached to #modal');
    } else if (modal.data === null && modalRef.current) {
      modalRef.current.firstChild && modalRef.current.removeChild(modalRef.current.firstChild);
      console.log('modal has been removed from #modal');
    }
  }, [modal.data]);

  const handleModalClose = () => {
    dispatch({ type: AppStateActions.TOGGLE_MODAL, payload: null });
  };

  // Modal return based on context
  if (modal.data === null) {
    return null;
  } else {
    return ReactDOM.createPortal(
      <ModalContent
        alt={modal.data.alt}
        src={modal.data.src}
        id={modal.data.id}
        onClose={handleModalClose}
      />,
      newElement.current
    );
  }
};

export default Modal;
