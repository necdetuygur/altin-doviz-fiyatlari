import React from "react";
import { Modal as BsModal, ModalHeader, ModalBody } from "reactstrap";
import { connect } from "react-redux";
import { setModalOpen, setModalTitle, setModalBody } from "../actions";

const Modal = (props: any) => {
  const modalToggle = () => props.setModalOpen(!props.modalOpen);
  return (
    <BsModal toggle={modalToggle} isOpen={props.modalOpen}>
      <ModalHeader toggle={modalToggle}>{props.modalTitle}</ModalHeader>
      <ModalBody className="p-1">{props.modalBody}</ModalBody>
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
