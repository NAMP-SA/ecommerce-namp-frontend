import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import PropTypes from 'prop-types';

const ErrorModal = ({isErrorModalOpen,closeErrorModal,error}) => {
  return (
    <Modal show={isErrorModalOpen} onClose={closeErrorModal}>
      <ModalHeader>¡Ocurrió un error!</ModalHeader>
      <ModalBody>
        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
        <p>{error}</p>
      </ModalBody>
      <ModalFooter>
        <Button onClick={closeErrorModal}>Aceptar</Button>
      </ModalFooter>
    </Modal>
  );
};

ErrorModal.propTypes = {
  isErrorModalOpen: PropTypes.bool.isRequired,
  closeErrorModal: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

export default ErrorModal;
