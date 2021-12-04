import React, { useEffect } from "react";
import { connect } from "react-redux";
import Altin from "./components/Fw/Altin";
import Doviz from "./components/Fw/Doviz";
import Ikd from "./components/Ikd";
import Modal from "./components/Modal";
import { getGold } from "./actions";

const App = (props: any) => {
  useEffect(() => {
    props.getGold();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container mt-3">
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
