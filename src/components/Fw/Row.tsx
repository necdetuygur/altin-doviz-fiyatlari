import { connect } from "react-redux";
import { setModalOpen, setModalTitle, setModalBody } from "../../actions";
import { Table } from "reactstrap";
import Loading from "../Loading";

const Row = ({
  setModalOpen,
  setModalTitle,
  setModalBody,

  TipShort,
  TipLong,
  Alis,
  Satis,
  Fark,
  OncekiKapanis,
  GununEnDusukDegeri,
  GununEnYuksekDegeri,
  YarinkiBeklentiOy,
  YarinkiBeklentiTahmin,
}: {
  setModalOpen: Function;
  setModalTitle: Function;
  setModalBody: Function;

  TipShort: string;
  TipLong: string;
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
        setModalTitle(TipLong + " Detayları");
        setModalBody(
          <div>
            <Table
              dark
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
      <td className="text-start">{TipShort}</td>
      <td>{Alis || <Loading width="19" />}</td>
      <td>{Satis || <Loading width="19" />}</td>
      <td className="text-end">
        {YarinkiBeklentiTahmin ? (
          <button className="btn btn-sm btn-dark">
            {YarinkiBeklentiTahmin}
          </button>
        ) : (
          <Loading width="19" />
        )}
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
