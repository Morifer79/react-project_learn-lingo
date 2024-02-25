import Modal from 'react-modal';
import SpriteIcons from '../../images/sprite.svg';
import { CloseBtn, ModalHeader } from './AuthModal.styled';
import { createPortal } from 'react-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '30px',
    padding: '64px',
    zIndex: '1300',
    overflowY: 'auto',
  },
};

Modal.setAppElement('#modal-root');
const modalRoot = document.querySelector('#modal-root');

export const AuthModal = ({ isOpen, onRequestClose, children }) => {
  return createPortal(
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <ModalHeader>
        <CloseBtn onClick={onRequestClose}>
          <svg width="32" height="32">
            <use xlinkHref={`${SpriteIcons}#icon-x`} />
          </svg>
        </CloseBtn>
      </ModalHeader>
      <div>{children}</div>
    </Modal>,
    modalRoot
  );
};
