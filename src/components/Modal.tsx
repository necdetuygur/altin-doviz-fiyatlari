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
      className={props.isDark ? "bg-dark text-white" : "bg-light text-dark"}
      fullscreen="lg"
    >
      <ModalHeader
        toggle={modalToggle}
        className={props.isDark ? "bg-dark text-white" : "bg-light text-dark"}
      >
        {props.modalTitle}
      </ModalHeader>
      <ModalBody className={"p-0 " + (props.isDark ? "bg-dark" : "bg-light")}>
        {props.modalBody}
      </ModalBody>
      <ModalFooter
        className={props.isDark ? "bg-dark text-white" : "bg-light text-dark"}
      >
        <button className="btn btn-sm btn-danger" onClick={modalToggle}>
          Kapat
        </button>
      </ModalFooter>
    </BsModal>
  );
};

export default connect(
  (state: {
    modalOpen: boolean;
    modalTitle: any;
    modalBody: any;
    isDark: boolean;
  }) => {
    return {
      modalOpen: state.modalOpen,
      modalTitle: state.modalTitle,
      modalBody: state.modalBody,
      isDark: state.isDark,
    };
  },
  { setModalOpen, setModalTitle, setModalBody }
)(Modal);
