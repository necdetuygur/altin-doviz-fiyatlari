import Card from "./Card";
import Loading from "./Loading";
import { Table } from "reactstrap";
import { connect } from "react-redux";
import { setModalOpen, setModalTitle, setModalBody } from "../actions";

const CustomTable = (props: any) => {
  const modalOpen = () => {
    if (!props.modalOpened) {
      props.setModalOpen(true);
      props.setModalTitle("İzmir Namaz Vakitleri");
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
            <td>İmsak</td>
            <td className="text-end">{props.data.Imsak}</td>
          </tr>
          <tr onClick={() => modalOpen()}>
            <td>Güneş</td>
            <td className="text-end">{props.data.Gunes}</td>
          </tr>
          <tr onClick={() => modalOpen()}>
            <td>Öğle</td>
            <td className="text-end">{props.data.Ogle}</td>
          </tr>
          <tr onClick={() => modalOpen()}>
            <td>İkindi</td>
            <td className="text-end">{props.data.Ikindi}</td>
          </tr>
          <tr onClick={() => modalOpen()}>
            <td>Akşam</td>
            <td className="text-end">{props.data.Aksam}</td>
          </tr>
          <tr onClick={() => modalOpen()}>
            <td>Yatsı</td>
            <td className="text-end">{props.data.Yatsi}</td>
          </tr>
        </tbody>
      )}
    </Table>
  );
};

const Namaz = (props: any) => {
  return (
    <Card title="İzmir Namaz Vakitleri" isDark={props.isDark} isShare={true}>
      {props.data ? (
        <CustomTable {...props} modalOpened={false} />
      ) : (
        <div className="text-center p-3">
          <Loading isDark={props.isDark} width="19" />
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
)(Namaz);
