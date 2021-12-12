import { useEffect } from "react";
import { connect } from "react-redux";
import Altin from "./Fw/Altin";
import Doviz from "./Fw/Doviz";
import Ikd from "./Ikd";
import Modal from "./Modal";
import Header from "./Header";
import Footer from "./Footer";
import Timeout from "./Timeout";
import { getGold, loadOldGold } from "../actions";

const App = (props: any) => {
  useEffect(() => {
    props.getGold();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container-fluid mt-3">
      <Header />
      <Timeout />
      <div className="row">
        <div className="col-md-4">
          <Altin {...props.gold} />
        </div>
        <div className="col-md-4">
          <Doviz {...props.gold} />
        </div>
        <div className="col-md-4">
          <Ikd data={props.gold.ikd} />
        </div>
      </div>
      <Footer />
      <Modal />
    </div>
  );
};

export default connect(
  (state: { gold: Object }) => {
    return {
      gold: state.gold,
    };
  },
  { getGold, loadOldGold }
)(App);
