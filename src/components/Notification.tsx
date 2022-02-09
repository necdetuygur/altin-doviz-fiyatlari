import axios from "axios";
import { useState } from "react";
import { Alert } from "reactstrap";
var CryptoJS = require("crypto-js");

const Notification = () => {
  const confirmMsg =
    "Bildirimi aktif edilen cihazlara bildirim mesajı gönderilecek, emin misiniz?";
  const sendHash =
    "U2FsdGVkX1+wYGuEmnZjpA7n2MjwYtHuMyOZrq5ZSWWZfaxgCIAlMOnYCdRJ3kb9NZ6JDq6AIMakqhBrSWmOkg==";
  const changeHash =
    "U2FsdGVkX19x5ExLETCqdDOhSGEFQnoZkN09smlrl99HUbYw//nqzQ2Y47UESFSYHnyQRqVHX5FoFgd3neApLw==";

  const [passwd, setPasswd] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [result, setResult] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  const Decrypt = (a: string, b: string) =>
    CryptoJS.AES.decrypt(a, b).toString(CryptoJS.enc.Utf8);

  const SetValue = (e: any) => {
    e.target.name == "title"
      ? setTitle(e.target.value)
      : e.target.name == "body"
      ? setBody(e.target.value)
      : e.target.name == "passwd"
      ? setPasswd(e.target.value)
      : 1;
  };

  const Result = (a: boolean, b: string) => {
    setResult(a);
    setResultMessage(b);
  };

  const Send = () => {
    setTimeout(() => {
      if (passwd.length < 2) {
        Result(false, "Parola yanlış!");
        return;
      }
      if (confirm(confirmMsg)) {
        const url = Decrypt(sendHash, passwd + "0");

        if (!(url.indexOf("http") > -1)) {
          Result(false, "Parola yanlış!");
          return;
        }

        if (url.indexOf("http") > -1) {
          axios
            .post(url, {
              title: title,
              body: body,
            })
            .then((r) => {
              Result(r.data.result, r.data.message);
            });
        }
      }
    }, 100);
  };

  const Change = () => {
    setTimeout(() => {
      if (passwd.length < 2) {
        Result(false, "Parola yanlış!");
        return;
      }
      if (confirm(confirmMsg)) {
        const url = Decrypt(changeHash, passwd + "0");

        if (!(url.indexOf("http") > -1)) {
          Result(false, "Parola yanlış!");
          return;
        }

        if (url.indexOf("http") > -1) {
          axios.post(url, {}).then((r) => {
            Result(r.data.result, r.data.message);
          });
        }
      }
    }, 100);
  };
  return (
    <div>
      {resultMessage && (
        <Alert color={result ? "success" : "danger"} title="Sonuç">
          <div className="m-2">{resultMessage}</div>
        </Alert>
      )}
      <div className="m-2">
        <div className="input-group mb-2">
          <span className="input-group-text w-25">Parola</span>
          <input
            name="passwd"
            type="password"
            className="form-control"
            onChange={(e) => SetValue(e)}
            onKeyUp={(e) => SetValue(e)}
          />
        </div>
        <div className="input-group mb-2">
          <span className="input-group-text w-25">Başlık</span>
          <input
            name="title"
            type="text"
            className="form-control"
            onChange={(e) => SetValue(e)}
            onKeyUp={(e) => SetValue(e)}
          />
        </div>
        <div className="input-group mb-2">
          <span className="input-group-text w-25">İçerik</span>
          <textarea
            name="body"
            className="form-control"
            onChange={(e) => SetValue(e)}
            onKeyUp={(e) => SetValue(e)}
          ></textarea>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn btn-primary w-100" onClick={() => Change()}>
              <i className="fa fa-refresh pe-2"></i>
              Sıfırla
            </button>
          </div>
          <div className="col">
            <button className="btn btn-primary w-100" onClick={() => Send()}>
              <i className="fa fa-paper-plane pe-2"></i>
              Gönder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
