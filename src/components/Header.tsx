import { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/tr";

const momentNow = () =>
  moment(new Date(), "DD-MM-YYYY HH:mm:ss")
    .locale("tr")
    .format("DD MMMM YYYY dddd HH:mm:ss");

export default () => {
  const [tarih, setTarih] = useState(momentNow());
  useEffect(() => {
    setInterval(() => {
      setTarih(momentNow());
    }, 1e3);
    // eslint-disable-next-line
  }, []);
  return (
    <div style={{ height: "33px" }}>
      <header className="text-center bg-dark text-light fixed-top border-secondary border-bottom p-1">
        {tarih}
      </header>
    </div>
  );
};
