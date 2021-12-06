import Card from "./Card";
import Loading from "./Loading";
import { Table } from "reactstrap";
import { connect } from "react-redux";
import { setModalOpen, setModalTitle, setModalBody } from "../actions";

const CustomTable = (props: any) => {
  const modalOpen = () => {
    if (!props.modalOpened) {
      props.setModalOpen(true);
      props.setModalTitle("İzmir Kuyumcular Odası Altın Fiyatları");
      props.setModalBody(<CustomTable {...props} modalOpened={true} />);
    }
  };
  return (
    <Table dark hover responsive style={{ cursor: "pointer", marginBottom: 0 }}>
      {props.data && (
        <tbody>
          <tr onClick={() => modalOpen()}>
            <td>Gram</td>
            <td className="text-end">{props.data.Gram}</td>
          </tr>
          <tr onClick={() => modalOpen()}>
            <td>Çeyrek</td>
            <td className="text-end">{props.data.Ceyrek}</td>
          </tr>
          <tr onClick={() => modalOpen()}>
            <td>Yarım</td>
            <td className="text-end">{props.data.Yarim}</td>
          </tr>
          <tr onClick={() => modalOpen()}>
            <td>Tam</td>
            <td className="text-end">{props.data.Tam}</td>
          </tr>
          <tr onClick={() => modalOpen()}>
            <td>Son Güncellenme Tarihi</td>
            <td className="text-end">{props.data.Tarih.replace(/-/gi, ".")}</td>
          </tr>
        </tbody>
      )}
    </Table>
  );
};

const Ikd = (props: any) => {
  return (
    <Card
      title="İzmir Kuyumcular Odası Altın Fiyatları"
      icon="/img/apple-touch-icon-152x152.png"
    >
      {props.data ? (
        <CustomTable {...props} modalOpened={false} />
      ) : (
        <div className="text-center p-3">
          <Loading width="19" />
        </div>
      )}
    </Card>
  );
};

export default connect(
  (state: {}) => {
    return {};
  },
  { setModalOpen, setModalTitle, setModalBody }
)(Ikd);
