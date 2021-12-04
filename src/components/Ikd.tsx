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
      <tbody>
        {props.data &&
          Object.keys(props.data).map((key: any, index: number) => {
            let value = props.data[key];
            key = key === "Ceyrek" ? "Çeyrek" : key === "Yarim" ? "Yarım" : key;
            return (
              <tr key={key} onClick={() => modalOpen()}>
                <td>{key}</td>
                <td className="text-end">{value.replace(/-/gi, ".")}</td>
              </tr>
            );
          })}
      </tbody>
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
