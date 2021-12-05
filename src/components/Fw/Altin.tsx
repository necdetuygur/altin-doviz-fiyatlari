import { Table } from "reactstrap";
import Card from "../Card";
import Row from "./Row";

const FwAltin = ({
  gram,
  ceyrek,
  yarim,
  tam,
}: {
  gram: any;
  ceyrek: any;
  yarim: any;
  tam: any;
}) => (
  <Card title="Altın Fiyatları" icon="/img/apple-touch-icon-152x152.png">
    <Table dark hover responsive style={{ cursor: "pointer", marginBottom: 0 }}>
      <tbody>
        <tr>
          <td></td>
          <td>Alış</td>
          <td>Satış</td>
          <td className="text-end">Tahmin</td>
        </tr>
        <Row {...gram} TipShort="Gram" TipLong="Gram Altın" />
        <Row {...ceyrek} TipShort="Çeyrek" TipLong="Çeyrek Altın" />
        <Row {...yarim} TipShort="Yarım" TipLong="Yarım Altın" />
        <Row {...tam} TipShort="Tam" TipLong="Tam Altın" />
      </tbody>
    </Table>
  </Card>
);

export default FwAltin;
