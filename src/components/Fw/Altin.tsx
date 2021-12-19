import { Table } from "reactstrap";
import Card from "../Card";
import Row from "./Row";

const FwAltin = ({
  gram,
  ceyrek,
  yarim,
  tam,
  editFavs,
}: {
  gram: any;
  ceyrek: any;
  yarim: any;
  tam: any;
  editFavs: boolean;
}) => (
  <Card title="Altın Fiyatları" icon="/img/apple-touch-icon-152x152.png">
    <Table dark hover responsive style={{ cursor: "pointer", marginBottom: 0 }}>
      <tbody>
        <tr>
          <td></td>
          <td>Alış</td>
          <td>Satış</td>
          <td className="text-end">Tahmin</td>
          {editFavs && <td className="text-end">Favoriler</td>}
        </tr>
        <Row {...gram} path="gram" editFavs={editFavs} />
        <Row {...ceyrek} path="ceyrek" editFavs={editFavs} />
        <Row {...yarim} path="yarim" editFavs={editFavs} />
        <Row {...tam} path="tam" editFavs={editFavs} />
      </tbody>
    </Table>
  </Card>
);

export default FwAltin;
