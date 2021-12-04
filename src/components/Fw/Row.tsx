import { connect } from "react-redux";
import { setModalOpen, setModalTitle, setModalBody } from "../../actions";
import { Table } from "reactstrap";
import Loading from "../Loading";
import Ikd from "../Ikd";

const Row = ({
  setModalOpen,
  setModalTitle,
  setModalBody,

  Tip,
  Alis,
  Satis,
  Fark,
  OncekiKapanis,
  GununEnDusukDegeri,
  GununEnYuksekDegeri,
  YarinkiBeklentiOy,
  YarinkiBeklentiTahmin
}: {
  setModalOpen: Function;
  setModalTitle: Function;
  setModalBody: Function;

  Tip: string;
  Alis: string;
  Satis: string;
  Fark: string;
  OncekiKapanis: string;
  GununEnDusukDegeri: string;
  GununEnYuksekDegeri: string;
  YarinkiBeklentiOy: string;
  YarinkiBeklentiTahmin: string;
}) => {
  return (
    <tr
      onClick={() => {
        setModalOpen(true);
        setModalTitle(Tip + " Detayları");
        setModalBody(
          <div>
          <Table
            hover
            responsive
            style={{ cursor: "pointer", marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td>Alış</td>
                <td className="text-end">{Alis}</td>
              </tr>
              <tr>
                <td>Satış</td>
                <td className="text-end">{Satis}</td>
              </tr>
              <tr>
                <td>Fark</td>
                <td className="text-end">{Fark}</td>
              </tr>
              <tr>
                <td>Önceki Kapanış</td>
                <td className="text-end">{OncekiKapanis}</td>
              </tr>
              <tr>
                <td>Günün En Düşük Değeri</td>
                <td className="text-end">{GununEnDusukDegeri}</td>
              </tr>
              <tr>
                <td>Günün En Yüksek Değeri</td>
                <td className="text-end">{GununEnYuksekDegeri}</td>
              </tr>
              <tr>
                <td>Yarınki Beklenti Oy</td>
                <td className="text-end">{YarinkiBeklentiOy}</td>
              </tr>
              <tr>
                <td>Yarınki Beklenti Tahmin</td>
                <td className="text-end">{YarinkiBeklentiTahmin}</td>
              </tr>
            </tbody>
          </Table>
          </div>
        );
      }}
    >
      <td className="text-start">{Tip}</td>
      <td>{Alis || <Loading width="16" />}</td>
      <td>{Satis || <Loading width="16" />}</td>
      <td className="text-end">
        {YarinkiBeklentiTahmin || <Loading width="16" />}
      </td>
    </tr>
  );
};

export default connect(
  (state: {}) => {
    return {};
  },
  { setModalOpen, setModalTitle, setModalBody }
)(Row);
