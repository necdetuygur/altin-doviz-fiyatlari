import { connect } from "react-redux";
import {
  getGold,
  setModalOpen,
  setModalTitle,
  setModalBody,
  toggleEditFavs,
  toggleIsDark,
} from "../actions";
import { useState, useEffect } from "react";
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
    <div style={{ height: "60px" }}>
      <header
        className={
          (props.isDark ? "bg-dark text-light" : "bg-light text-dark") +
          " fixed-top border-secondary border-bottom p-1"
        }
      >
        <div className="d-flex justify-content-between">
          <button
            className={
              "m-1 btn btn-sm btn-outline-" +
              (props.isDark ? "primary" : "dark")
            }
            onClick={() => {
              props.getGold(true);
            }}
          >
            <i style={{ width: "16px" }} className="fa fa-refresh"></i>
          </button>
          <button
            className={
              "m-1 btn btn-sm btn-outline-" +
              (props.isDark ? "primary" : "dark")
            }
            onClick={() => props.getGold(false)}
          >
            <small>{tarih}</small>
          </button>
          <button
            className={
              "m-1 btn btn-sm btn-outline-" +
              (props.isDark ? "primary" : "dark")
            }
            onClick={() => {
              props.toggleEditFavs();
            }}
          >
            <i className="fa fa-sliders"></i>
            {props.editFavs ? " Düzenleme Modunu Kapat" : ""}
          </button>
          <button
            className={
              "m-1 btn btn-sm btn-outline-" +
              (props.isDark ? "primary" : "dark")
            }
            onClick={() => {
              props.toggleIsDark();
            }}
          >
            <i
              style={{ width: "16px" }}
              className={props.isDark ? "fa fa-moon-o" : "fa fa-sun-o"}
            ></i>
          </button>
        </div>
      </header>
    </div>
  );
};

export default connect(
  (state: { proMode: boolean; isDark: boolean; editFavs: boolean }) => {
    return {
      proMode: state.proMode,
      isDark: state.isDark,
      editFavs: state.editFavs,
    };
  },
  {
    setModalOpen,
    setModalTitle,
    setModalBody,
    getGold,
    toggleEditFavs,
    toggleIsDark,
  }
)(Header);
