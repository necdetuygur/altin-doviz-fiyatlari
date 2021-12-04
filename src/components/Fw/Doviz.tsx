import { Table } from "reactstrap";
import Card from "../Card";
import Row from "./Row";

const FwDoviz = ({ usd, eur, gbp }: { usd: any; eur: any; gbp: any }) => (
  <Card title="Döviz Fiyatları" icon="/img/doviz.png">
    <Table hover responsive style={{ cursor: "pointer", marginBottom: 0 }}>
      <tbody>
        <tr>
          <td></td>
          <td>Alış</td>
          <td>Satış</td>
          <td className="text-end">Tahmin</td>
        </tr>
        <Row {...usd} Tip="Dolar" />
        <Row {...eur} Tip="Euro" />
        <Row {...gbp} Tip="Sterlin" />
      </tbody>
    </Table>
  </Card>
);

export default FwDoviz;
