import { useEffect, useState } from "react";
import Loading from "./Loading";
import { Table } from "reactstrap";
import { connect } from "react-redux";
import { getIkdHistory } from "../actions";

const adZero = (a: number) => ("00" + a).slice(-2);

const CustomTable = (props: any) => {
  return (
    <Table
      hover
      responsive
      style={{ cursor: "default", marginBottom: 0 }}
      className={
        props.isDark ? "table-dark text-white" : "table-light text-dark"
      }
    >
      {props.ikdHistory.length > 0 && (
        <tbody>
          <tr>
            <td>Tarih Saat</td>
            <td>Gram</td>
            <td>Çeyrek</td>
            <td>Yarım</td>
            <td>Tam</td>
          </tr>
          {props.ikdHistory.map((row: any) => (
            <tr key={row.Tarih}>
              <td>{row.Tarih}</td>
              <td>{row.Gram}</td>
              <td>{row.Ceyrek}</td>
              <td>{row.Yarim}</td>
              <td>{row.Tam}</td>
            </tr>
          ))}
        </tbody>
      )}
    </Table>
  );
};

const IkdHistory = (props: any) => {
  const initDate = new Date(new Date().getTime() - 86400000);

  const initYear = initDate.getFullYear();
  const initMonth = adZero(initDate.getMonth() + 1);
  const initDay = adZero(initDate.getDate());

  const [year, setYear] = useState(initYear);
  const [month, setMonth] = useState(initMonth);
  const [day, setDay] = useState(initDay);

  const onChHandler = (e: any) => {
    const nam = e.target.name;
    const val = e.currentTarget.value;
    nam === "year"
      ? setYear(val)
      : nam === "month"
      ? setMonth(val)
      : nam === "day"
      ? setDay(val)
      : 1;
  };

  useEffect(() => {
    props.getIkdHistory(true, `${day}.${month}.${year}`);
    // eslint-disable-next-line
  }, []);

  let yillar = [];
  const sonYil = new Date().getFullYear();
  for (let i = sonYil - 15; i <= sonYil; i++) {
    yillar.push(i);
  }

  let aylar = [];
  for (let i = 1; i <= 12; i++) {
    aylar.push(adZero(i));
  }

  let gunler = [];
  for (let i = 1; i <= 31; i++) {
    gunler.push(adZero(i));
  }

  return (
    <div>
      <div className="row p-1">
        <div className="col">
          Gün
          <br />
          <select
            className="form-select form-select-sm"
            onChange={(e) => onChHandler(e)}
            value={day}
            name="day"
          >
            {gunler.map((gun) => (
              <option key={gun} value={gun}>
                {gun}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          Ay
          <br />
          <select
            className="form-select form-select-sm"
            onChange={(e) => onChHandler(e)}
            value={month}
            name="month"
          >
            {aylar.map((ay) => (
              <option key={ay} value={ay}>
                {ay}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          Yıl
          <br />
          <select
            className="form-select form-select-sm"
            onChange={(e) => onChHandler(e)}
            value={year}
            name="year"
          >
            {yillar.map((yil) => (
              <option key={yil} value={yil}>
                {yil}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row p-1">
        <div className="col">
          <button
            className="btn btn-sm btn-primary w-100"
            onClick={() => {
              props.getIkdHistory(true, `${day}.${month}.${year}`);
            }}
          >
            <i className="fa fa-eye pe-2"></i>
            Göster
          </button>
        </div>
      </div>
      {props.ikdHistory.length > 0 ? (
        <CustomTable {...props} />
      ) : (
        <div className="text-center p-3">
          <Loading isDark={props.isDark} width="19" />
        </div>
      )}
    </div>
  );
};

export default connect(
  (state: { ikdHistory: any; isDark: boolean }) => {
    return {
      ikdHistory: state.ikdHistory,
      isDark: state.isDark,
    };
  },
  { getIkdHistory }
)(IkdHistory);
