import { Table } from "reactstrap";
import Card from "../Card";
import Row from "./Row";

const FwDoviz = ({
  usd,
  eur,
  gbp,
  editFavs,

  isDark,
}: {
  usd: any;
  eur: any;
  gbp: any;
  editFavs: boolean;

  isDark: boolean;
}) => (
  <Card
    title="Döviz Fiyatları"
    icon="/img/doviz.png"
    isDark={isDark}
    isShare={true}
  >
    <Table
      hover
      responsive
      style={{ cursor: "pointer", marginBottom: 0 }}
      className={isDark ? "table-dark text-white" : "table-light text-dark"}
    >
      <tbody>
        <tr>
          {editFavs && <td className="text-start">Favoriler</td>}
          <td></td>
          <td>Alış</td>
          <td>Satış</td>
          <td className="text-end">Tahmin</td>
        </tr>
        <Row {...usd} path="usd" editFavs={editFavs} />
        <Row {...eur} path="eur" editFavs={editFavs} />
        <Row {...gbp} path="gbp" editFavs={editFavs} />
      </tbody>
    </Table>
  </Card>
);

export default FwDoviz;
