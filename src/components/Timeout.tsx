import { useEffect, useState, useRef } from "react";
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
        <Card title="Görünüşe göre fiyatlar getirilemedi, son alınan fiyatlar gösterilsin mi?">
          <div className="text-center p-2">
            <button
              className="mx-1 btn btn-sm btn-outline-primary"
              onClick={() => props.loadOldGold()}
            >
              Evet
            </button>
            <button
              className="mx-1 btn btn-sm btn-outline-primary"
              onClick={() => props.getGold()}
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
  (state: { gold: Object }) => {
    return {
      gold: state.gold,
    };
  },
  { getGold, loadOldGold }
)(Timeout);
