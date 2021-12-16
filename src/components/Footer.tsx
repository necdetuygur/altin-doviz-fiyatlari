import GitHubButton from "react-github-btn";
import Notification from "./Notification";
import { connect } from "react-redux";
import { setModalOpen, setModalTitle, setModalBody } from "../actions";

const Footer = ({
  setModalOpen,
  setModalTitle,
  setModalBody,
}: {
  setModalOpen: Function;
  setModalTitle: Function;
  setModalBody: Function;
}) => {
  return (
    <footer className="bg-dark text-light fixed-bottom border-secondary border-top p-1">
      <div className="d-flex justify-content-between">
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
        <GitHubButton
          href="https://github.com/necdetuygur/altin-doviz-fiyatlari"
          data-color-scheme="no-preference: dark; light: dark; dark: dark;"
          data-size="large"
        >
          GitHub
        </GitHubButton>
      </div>
    </footer>
  );
};

export default connect(
  (state: {}) => {
    return {};
  },
  { setModalOpen, setModalTitle, setModalBody }
)(Footer);
