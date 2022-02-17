import GitHubButton from "react-github-btn";
import Notification from "./Notification";
import Health from "./Health";
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
  isDark,
}: {
  setModalOpen: Function;
  setModalTitle: Function;
  setModalBody: Function;
  setProMode: Function;
  proMode: boolean;
  isDark: boolean;
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
        className={
          (isDark ? "bg-dark text-light" : "bg-light text-dark") +
          " fixed-bottom border-secondary border-top p-1"
        }
        onClick={() => {
          decreaseProModeCounter();
        }}
      >
        <div className="d-flex justify-content-between">
          {proMode ? (
            <button
              className={
                "btn btn-sm btn-outline-" + (isDark ? "primary" : "dark")
              }
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

          {proMode ? (
            <button
              className={
                "btn btn-sm btn-outline-" + (isDark ? "primary" : "dark")
              }
              onClick={() => {
                setModalOpen(true);
                setModalTitle(
                  <span>
                    <i className="fa fa-heartbeat pe-2"></i>
                    Servis Sağlık Bilgileri
                  </span>
                );
                setModalBody(<Health />);
              }}
            >
              <i className="fa fa-heartbeat pe-2"></i>
              Sağlık
            </button>
          ) : (
            <span>&nbsp;</span>
          )}

          <GitHubButton
            href="https://github.com/necdetuygur/altin-doviz-fiyatlari"
            data-color-scheme="no-preference: dark; light: dark; dark: dark;"
            data-size="large"
          >
            Kaynak Kodu
          </GitHubButton>
        </div>
      </footer>
    </div>
  );
};

export default connect(
  (state: { proMode: boolean; isDark: boolean }) => {
    return {
      proMode: state.proMode,
      isDark: state.isDark,
    };
  },
  { setModalOpen, setModalTitle, setModalBody, setProMode }
)(Footer);
