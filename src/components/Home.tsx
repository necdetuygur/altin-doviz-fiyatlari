import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import Altin from "./Fw/Altin";
import Doviz from "./Fw/Doviz";
import Ikd from "./Ikd";
import Fav from "./Fav";
import { getGold, toggleIsDark } from "../actions";
let refreshTimer: any = null;

const Home = (props: any) => {
  const [refreshTime, setRefreshTime] = useState(
    localStorage.getItem("refreshTime") || "0"
  );

  const refreshTimerStart = () => {
    clearInterval(refreshTimer);
    const min = Number(localStorage.getItem("refreshTime") || "0");
    if (min != 0) {
      refreshTimer = setInterval(() => {
        props.getGold(true);
      }, min * 6e4);
    }
  };

  const onChHandler = (e: any) => {
    const nam = e.target.name;
    const val = e.currentTarget.value;
    if (nam === "refreshTime") {
      setRefreshTime(val);
      localStorage.setItem("refreshTime", val);
      refreshTimerStart();
    }
  };

  useEffect(() => {
    props.getGold(true);
    refreshTimerStart();
    props.toggleIsDark();
    props.toggleIsDark();
    return () => clearInterval(refreshTimer);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="row">
        {props.editFavs && (
          <div className="col-md-12">
            <Card title="Otomatik Yenileme Süresi" isDark={props.isDark}>
              <div className="m-2">
                <select
                  className="form-select form-select-sm"
                  onChange={(e) => onChHandler(e)}
                  value={refreshTime}
                  name="refreshTime"
                >
                  {Array.from(Array(61).keys()).map((dakika) => (
                    <option key={dakika} value={dakika}>
                      {dakika ? dakika + " dakikada bir" : "Yenileme kapalı"}
                    </option>
                  ))}
                </select>
              </div>
            </Card>
          </div>
        )}
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
)(Home);
