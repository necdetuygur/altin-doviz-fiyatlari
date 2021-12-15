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
    <div style={{ height: "50px" }}>
      <footer className="border-secondary">
        <button
          className="float-start btn btn-sm btn-outline-primary mb-2"
          onClick={() => {
            setModalOpen(true);
            setModalTitle("Bildirim Gönder");
            setModalBody(<Notification />);
          }}
        >
          Bildirim Gönder
        </button>
        <span className="float-end">
          <GitHubButton
            href="https://github.com/necdetuygur/altin-doviz-fiyatlari"
            data-color-scheme="no-preference: dark; light: dark; dark: dark;"
            data-size="large"
          >
            GitHub
          </GitHubButton>
        </span>
      </footer>
    </div>
  );
};

export default connect(
  (state: {}) => {
    return {};
  },
  { setModalOpen, setModalTitle, setModalBody }
)(Footer);
