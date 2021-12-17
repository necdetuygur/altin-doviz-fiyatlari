import GitHubButton from "react-github-btn";
import Notification from "./Notification";
import { connect } from "react-redux";
import {
  setModalOpen,
  setModalTitle,
  setModalBody,
  setProMode,
} from "../actions";
import { useState } from "react";

const Footer = ({
  setModalOpen,
  setModalTitle,
  setModalBody,
  setProMode,
  proMode,
}: {
  setModalOpen: Function;
  setModalTitle: Function;
  setModalBody: Function;
  setProMode: Function;
  proMode: boolean;
}) => {
  const [proModeCounter, setProModeCounter] = useState(4);
  const decreaseProModeCounter = () => {
    if (proModeCounter === 0) {
      setProMode(true);
    } else {
      setProModeCounter(proModeCounter - 1);
    }
  };

  return (
    <div style={{ height: "90px" }}>
      <footer
        className="bg-dark text-light fixed-bottom border-secondary border-top p-1"
        onClick={() => {
          decreaseProModeCounter();
        }}
      >
        <div className="d-flex justify-content-between">
          {proMode ? (
            <button
              className="btn btn-sm btn-outline-primary"
              onClick={() => {
                setModalOpen(true);
                setModalTitle(
                  <span>
                    <i className="fa fa-bell pe-2"></i>
                    Bildirim Gönder
                  </span>
                );
                setModalBody(<Notification />);
              }}
            >
              <i className="fa fa-bell pe-2"></i>
              Bildirim Gönder
            </button>
          ) : (
            <span>&nbsp;</span>
          )}
          <GitHubButton
            href="https://github.com/necdetuygur/altin-doviz-fiyatlari"
            data-color-scheme="no-preference: dark; light: dark; dark: dark;"
            data-size="large"
          >
            GitHub
          </GitHubButton>
        </div>
      </footer>
    </div>
  );
};

export default connect(
  (state: { proMode: boolean }) => {
    return {
      proMode: state.proMode,
    };
  },
  { setModalOpen, setModalTitle, setModalBody, setProMode }
)(Footer);
