import Card from "./Card";
import Loading from "./Loading";
import { Table } from "reactstrap";
import { connect } from "react-redux";
import { setModalOpen, setModalTitle, setModalBody } from "../actions";
import IkdHistory from "./IkdHistory";

const CustomTable = (props: any) => {
  const modalOpen = () => {
    if (!props.modalOpened) {
      props.setModalOpen(true);
      props.setModalTitle(
        <span>
          <i className="fa fa-line-chart pe-2"></i>
          İzmir Kuyumcular Odası Altın Fiyatları
        </span>
      );
      props.setModalBody(<CustomTable {...props} modalOpened={true} />);
    }
  };
  return (
    <Table
      hover
      responsive
      style={{ cursor: "pointer", marginBottom: 0 }}
      className={
        props.isDark ? "table-dark text-white" : "table-light text-dark"
      }
    >
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
  const gafModal = () => {
    props.setModalOpen(true);
    props.setModalTitle(
      <span>
        <i className="fa fa-line-chart pe-2"></i>
        Geçmiş Altın Fiyatları
      </span>
    );
    props.setModalBody(<IkdHistory />);
  };
  return (
    <Card
      title="İzmir Kuyumcular Odası"
      icon="/img/iko.png"
      isDark={props.isDark}
      header={
        <button
          className="btn btn-sm btn-outline-primary"
          onClick={() => {
            gafModal();
          }}
        >
          <i style={{ width: "16px" }} className="fa fa-history"></i>
        </button>
      }
    >
      {props.data ? (
        <CustomTable {...props} modalOpened={false} />
      ) : (
        <div className="text-center p-3">
          <Loading isDark={props.isDark} width="19" />
        </div>
      )}
      <div className="p-2">
        <button
          className="btn btn-sm btn-primary w-100"
          onClick={() => {
            gafModal();
          }}
        >
          <i className="fa fa-history pe-2"></i>
          Geçmiş Altın Fiyatları
        </button>
      </div>
    </Card>
  );
};

export default connect(
  (state: {}) => {
    return {};
  },
  { setModalOpen, setModalTitle, setModalBody }
)(Ikd);
