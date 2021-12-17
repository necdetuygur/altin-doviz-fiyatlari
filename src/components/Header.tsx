import { connect } from "react-redux";
import { getGold, setModalOpen, setModalTitle, setModalBody } from "../actions";
import { useState, useEffect } from "react";
import Saglik from "./Saglik";
import moment from "moment";
import "moment/locale/tr";

const momentNow = () =>
  moment(new Date(), "DD-MM-YYYY HH:mm:ss")
    .locale("tr")
    .format("DD MMMM YYYY dddd HH:mm:ss");

const Header = (props: any) => {
  const [tarih, setTarih] = useState(momentNow());
  useEffect(() => {
    setInterval(() => {
      setTarih(momentNow());
    }, 1e3);
    // eslint-disable-next-line
  }, []);
  return (
    <div style={{ height: "33px" }}>
      <header className="bg-dark text-light fixed-top border-secondary border-bottom p-1">
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={() => props.getGold()}
          >
            <i className="fa fa-refresh pe-2"></i>
            {tarih}
          </button>
          {props.proMode ? (
            <button
              className="btn btn-sm btn-outline-primary"
              onClick={() => {
                props.setModalOpen(true);
                props.setModalTitle(
                  <span>
                    <i className="fa fa-heartbeat pe-2"></i>
                    Servis Sağlık Bilgileri
                  </span>
                );
                props.setModalBody(<Saglik />);
              }}
            >
              <i className="fa fa-heartbeat pe-2"></i>
              Sağlık
            </button>
          ) : (
            <span>&nbsp;</span>
          )}
        </div>
      </header>
    </div>
  );
};

export default connect(
  (state: { proMode: boolean }) => {
    return {
      proMode: state.proMode,
    };
  },
  { setModalOpen, setModalTitle, setModalBody, getGold }
)(Header);
