import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Altin from "./Fw/Altin";
import Doviz from "./Fw/Doviz";
import Ikd from "./Ikd";
import Modal from "./Modal";
import Header from "./Header";
import { getGold } from "../actions";
import moment from "moment";
import "moment/locale/tr";

const App = (props: any) => {
  const [tarih, setTarih] = useState("");
  useEffect(() => {
    props.getGold();
    setInterval(() => {
      setTarih(
        moment(new Date(), "DD-MM-YYYY HH:mm:ss")
          .locale("tr")
          .format("DD MMMM YYYY dddd HH:mm:ss")
      );
    }, 1e3);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container-fluid mt-3">
      <Header tarih={tarih} />
      <div className="row">
        <div className="col">
          <Altin {...props.gold} />
        </div>
        <div className="col">
          <Doviz {...props.gold} />
        </div>
        {props.gold.ikd && (
          <div className="col">
            <Ikd data={props.gold.ikd} />
          </div>
        )}
      </div>
      <Modal />
    </div>
  );
};

export default connect(
  (state: { isLoading: boolean; gold: Object }) => {
    return {
      isLoading: state.isLoading,
      gold: state.gold,
    };
  },
  { getGold }
)(App);
