import { useEffect } from "react";
import { connect } from "react-redux";
import Altin from "./Fw/Altin";
import Doviz from "./Fw/Doviz";
import Ikd from "./Ikd";
import Fav from "./Fav";
import { getGold, toggleIsDark } from "../actions";

const App = (props: any) => {
  useEffect(() => {
    props.getGold(true);
    props.toggleIsDark();
    props.toggleIsDark();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="row">
        {props.favs.length > 0 && !props.editFavs && (
          <div className="col-md-4">
            <Fav />
          </div>
        )}
        <div className="col-md-4">
          <Altin
            {...props.gold}
            editFavs={props.editFavs}
            isDark={props.isDark}
          />
        </div>
        <div className="col-md-4">
          <Doviz
            {...props.gold}
            editFavs={props.editFavs}
            isDark={props.isDark}
          />
        </div>
        <div className="col-md-4">
          <Ikd data={props.gold.ikd} isDark={props.isDark} />
        </div>
      </div>
    </>
  );
};

export default connect(
  (state: {
    gold: Object;
    editFavs: boolean;
    favs: Array<string>;
    isDark: boolean;
  }) => {
    return {
      gold: state.gold,
      editFavs: state.editFavs,
      favs: state.favs,
      isDark: state.isDark,
    };
  },
  { getGold, toggleIsDark }
)(App);
