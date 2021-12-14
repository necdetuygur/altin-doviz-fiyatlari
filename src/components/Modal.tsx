import {
  Modal as BsModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { connect } from "react-redux";
import { setModalOpen, setModalTitle, setModalBody } from "../actions";

const Modal = (props: any) => {
  const modalToggle = () => props.setModalOpen(!props.modalOpen);
  return (
    <BsModal
      toggle={modalToggle}
      isOpen={props.modalOpen}
      className="bg-dark text-white"
    >
      <ModalHeader toggle={modalToggle} className="bg-dark text-white">
        {props.modalTitle}
      </ModalHeader>
      <ModalBody className="p-0">{props.modalBody}</ModalBody>
      <ModalFooter className="bg-dark text-white">
        <button className="btn btn-sm btn-secondary" onClick={modalToggle}>
          Kapat
        </button>{" "}
      </ModalFooter>
    </BsModal>
  );
};

export default connect(
  (state: { modalOpen: boolean; modalTitle: any; modalBody: any }) => {
    return {
      modalOpen: state.modalOpen,
      modalTitle: state.modalTitle,
      modalBody: state.modalBody,
    };
  },
  { setModalOpen, setModalTitle, setModalBody }
)(Modal);
