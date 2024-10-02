import React, { ReactNode } from 'react';
import { Modal as BsModal, Button } from 'react-bootstrap';

interface AlertModalProps {
  alertmodaltext: ReactNode;
  onHide: () => void;
  show: boolean;
  size?: 'sm' | 'lg' | 'xl';
}

const AlertModal: React.FC<AlertModalProps> = (props) => {
  return (
    <BsModal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <React.Fragment>
        <BsModal.Body>
          <p>{props.alertmodaltext}</p>
        </BsModal.Body>
        <BsModal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </BsModal.Footer>
      </React.Fragment>
    </BsModal>
  );
};

export default AlertModal;
