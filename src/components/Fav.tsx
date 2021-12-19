import { connect } from "react-redux";
import { setFavs } from "../actions";
import { useEffect } from "react";
import Row from "./Fw/Row";
import { Table } from "reactstrap";
import Lang from "../lang";
import Card from "./Card";

const Fav = (props: any) => {
  useEffect(() => {
    // eslint-disable-next-line
  }, []);
  return (
    <Card title="Favoriler" icon="/img/favorites.svg">
      <Table
        dark
        hover
        responsive
        style={{ cursor: "pointer", marginBottom: 0 }}
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
  (state: { favs: Array<string>; gold: Object }) => {
    return {
      favs: state.favs,
      gold: state.gold,
    };
  },
  { setFavs }
)(Fav);
