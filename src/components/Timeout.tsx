import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getGold, loadOldGold } from "../actions";
import Card from "./Card";

const Timeout = (props: any) => {
  const [timerFinish, setTimerFinish] = useState(false);
  useEffect(() => {
    setTimerFinish(false);
    const timer = setTimeout(() => {
      setTimerFinish(true);
    }, 3e3);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [props.gold]);
  return (
    <>
      {timerFinish && "ikd" in props.gold && props.gold.ikd === null && (
        <Card
          title="Görünüşe göre fiyatlar getirilemedi, son alınan fiyatlar gösterilsin mi?"
          isDark={props.isDark}
        >
          <div className="text-center p-2">
            <button
              className={
                "mx-1 btn btn-sm btn-outline-" +
                (props.isDark ? "primary" : "dark")
              }
              onClick={() => props.loadOldGold()}
            >
              Evet
            </button>
            <button
              className={
                "mx-1 btn btn-sm btn-outline-" +
                (props.isDark ? "primary" : "dark")
              }
              onClick={() => props.getGold(false)}
            >
              Tekrar Dene
            </button>
          </div>
        </Card>
      )}
    </>
  );
};

export default connect(
  (state: { gold: Object; isDark: boolean }) => {
    return {
      gold: state.gold,
      isDark: state.isDark,
    };
  },
  { getGold, loadOldGold }
)(Timeout);
