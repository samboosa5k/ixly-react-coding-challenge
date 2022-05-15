/**
 * Modal component to toggle the maximized photo view/lightbox
 * @description - this modal will be triggered by a context dispatch
 * @note: THe react 18 portal functionality is different than react 17 :S
 */
import { useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

export const Modal = () => {
  // const {appState, dispatch  } = useContext(Query);
  const modalRef = useRef<HTMLElement>(document.getElementById('modal'));
  const newElement = useRef<HTMLElement>(document.createElement('div'));

  // Mount modal on mount
  const mountModal = useCallback(() => {
    if (!modalRef.current) {
      console.log('modal-root not found');
      return;
    }
    modalRef.current.appendChild(newElement.current);
    console.log('modal has been attached to #modal');
  }, []);

  // Call mountModal when component mounts
  useEffect(() => {
    mountModal();
    console.log('Initiating modal mounting');
    return () => {
      modalRef.current.removeChild(modalRef.current.firstChild);
      console.log('Modal has been unmounted');
    };
  }, [mountModal]);

  return ReactDOM.createPortal(<h1>Hello Modal</h1>, newElement.current);
};

export default Modal;
