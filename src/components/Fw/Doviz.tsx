import { Table } from "reactstrap";
import Card from "../Card";
import Row from "./Row";

const FwDoviz = ({ usd, eur, gbp }: { usd: any; eur: any; gbp: any }) => (
  <Card title="Döviz Fiyatları" icon="/img/doviz.png">
    <Table dark hover responsive style={{ cursor: "pointer", marginBottom: 0 }}>
      <tbody>
        <tr>
          <td></td>
          <td>Alış</td>
          <td>Satış</td>
          <td className="text-end">Tahmin</td>
        </tr>
        <Row {...usd} TipShort="USD" TipLong="Dolar (USD)" />
        <Row {...eur} TipShort="EUR" TipLong="Euro (EUR)" />
        <Row {...gbp} TipShort="GBP" TipLong="Sterlin (GBP)" />
      </tbody>
    </Table>
  </Card>
);

export default FwDoviz;
