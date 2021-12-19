import { connect } from "react-redux";
import {
  setModalOpen,
  setModalTitle,
  setModalBody,
  setFavs,
} from "../../actions";
import { Table } from "reactstrap";
import Loading from "../Loading";
import Lang from "../../lang";

const Row = ({
  path,
  editFavs,
  favs,
  setFavs,

  setModalOpen,
  setModalTitle,
  setModalBody,

  Alis,
  Satis,
  Fark,
  OncekiKapanis,
  GununEnDusukDegeri,
  GununEnYuksekDegeri,
  YarinkiBeklentiOy,
  YarinkiBeklentiTahmin,
}: {
  path: string;
  editFavs: boolean;
  favs: Array<Object>;
  setFavs: Function;

  setModalOpen: Function;
  setModalTitle: Function;
  setModalBody: Function;

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
        if (!editFavs) {
          setModalOpen(true);
          setModalTitle(
            <span>
              <i className="fa fa-line-chart pe-2"></i>
              {Lang[path] + " Detayları"}
            </span>
          );
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
        }
      }}
    >
      <td className="text-start">{Lang[path]}</td>
      <td>{Alis || <Loading width="19" />}</td>
      <td>{Satis || <Loading width="19" />}</td>
      <td className="text-end">
        {YarinkiBeklentiTahmin ? (
          YarinkiBeklentiTahmin.indexOf("Art") > -1 ? (
            <span className="text-success">
              <i className="fa fa-arrow-up pe-2"></i>
              {YarinkiBeklentiTahmin}
            </span>
          ) : (
            <span className="text-danger">
              <i className="fa fa-arrow-down pe-2"></i>
              {YarinkiBeklentiTahmin}
            </span>
          )
        ) : (
          <Loading width="19" />
        )}
      </td>
      {editFavs && (
        <td className="text-end">
          {!(favs.indexOf(path) > -1) && (
            <button
              className="btn btn-dark btn-sm"
              onClick={() => {
                setFavs([...favs, path]);
              }}
            >
              <i className="fa fa-star-o"></i>
            </button>
          )}
          {favs.indexOf(path) > -1 && (
            <button
              className="btn btn-dark btn-sm"
              onClick={() => {
                favs.splice(favs.indexOf(path), 1);
                setFavs([...favs]);
              }}
            >
              <i className="fa fa-star"></i>
            </button>
          )}
        </td>
      )}
    </tr>
  );
};

export default connect(
  (state: { favs: Array<string> }) => {
    return {
      favs: state.favs,
    };
  },
  { setModalOpen, setModalTitle, setModalBody, setFavs }
)(Row);
