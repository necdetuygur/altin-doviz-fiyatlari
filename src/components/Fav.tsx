import { connect } from "react-redux";
import { setFavs } from "../actions";
import { useEffect } from "react";
import Row from "./Fw/Row";
import { Table } from "reactstrap";
import Card from "./Card";

const Fav = (props: any) => {
  useEffect(() => {
    // eslint-disable-next-line
  }, []);
  return (
    <Card title="Favoriler" icon="/img/favorites.png" isDark={props.isDark}>
      <Table
        hover
        responsive
        style={{ cursor: "pointer", marginBottom: 0 }}
        className={
          props.isDark ? "table-dark text-white" : "table-light text-dark"
        }
      >
        <tbody>
          <tr>
            <td></td>
            <td>Alış</td>
            <td>Satış</td>
            <td className="text-end">Tahmin</td>
          </tr>
          {props.favs.map((fav: any) => (
            <Row key={fav} {...props.gold[fav]} path={fav} editFavs={false} />
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export default connect(
  (state: { favs: Array<string>; gold: Object; isDark: boolean }) => {
    return {
      favs: state.favs,
      gold: state.gold,
      isDark: state.isDark,
    };
  },
  { setFavs }
)(Fav);
