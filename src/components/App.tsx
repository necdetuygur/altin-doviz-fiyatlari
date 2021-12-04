import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Altin from "./Fw/Altin";
import Doviz from "./Fw/Doviz";
import Ikd from "./Ikd";
import Modal from "./Modal";
import Header from "./Header";
import { getGold } from "../actions";

const App = (props: any) => {
  useEffect(() => {
    props.getGold();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container-fluid mt-3">
      <Header />
      <div className="row">
        <div className="col">
          <Altin {...props.gold} />
        </div>
        <div className="col">
          <Doviz {...props.gold} />
        </div>
        <div className="col">
          <Ikd data={props.gold.ikd} />
        </div>
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
