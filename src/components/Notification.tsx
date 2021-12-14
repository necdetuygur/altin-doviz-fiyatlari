import axios from "axios";
import { useState } from "react";
import { Alert } from "reactstrap";
var CryptoJS = require("crypto-js");

const Notification = () => {
  const [passwd, setPasswd] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [result, setResult] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const setValue = (e: any) => {
    e.target.name == "title"
      ? setTitle(e.target.value)
      : e.target.name == "body"
      ? setBody(e.target.value)
      : e.target.name == "passwd"
      ? setPasswd(e.target.value)
      : 1;
  };
  const Send = () => {
    setTimeout(() => {
      if (
        confirm(
          "Bildirimi aktif edilen cihazlara bildirim mesajı gönderilecek, emin misiniz?"
        )
      ) {
        if (passwd.length < 2) {
          setResult(false);
          setResultMessage("Parola yanlış!");
          return;
        }

        const url = CryptoJS.AES.decrypt(
          "U2FsdGVkX1/jcisiSIsguqq9I01+mulzuVdPkQWYpcgg/aCycY+qHVF/CTM5XMEsurFLDj3fDmSXVDP3KGU+jQ==",
          passwd + "0"
        ).toString(CryptoJS.enc.Utf8);

        if (!(url.indexOf("http") > -1)) {
          setResult(false);
          setResultMessage("Parola yanlış!");
          return;
        }

        if (url.indexOf("http") > -1) {
          axios
            .post(url, {
              title: title,
              body: body,
            })
            .then((r) => {
              setResult(r.data.result);
              setResultMessage(r.data.message);
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
            onChange={(e) => setValue(e)}
            onKeyUp={(e) => setValue(e)}
          />
        </div>
        <div className="input-group mb-2">
          <span className="input-group-text w-25">Başlık</span>
          <input
            name="title"
            type="text"
            className="form-control"
            onChange={(e) => setValue(e)}
            onKeyUp={(e) => setValue(e)}
          />
        </div>
        <div className="input-group mb-2">
          <span className="input-group-text w-25">İçerik</span>
          <textarea
            name="body"
            className="form-control"
            onChange={(e) => setValue(e)}
            onKeyUp={(e) => setValue(e)}
          ></textarea>
        </div>
        <input
          type="button"
          value="Gönder"
          className="btn btn-primary mb-2 w-100"
          onClick={() => Send()}
        />
      </div>
    </div>
  );
};

export default Notification;
