import * as htmlToImage from "html-to-image";

const saveAs = (blob: any, fileName: string) => {
  var elem = window.document.createElement("a");
  elem.href = blob;
  elem.download = fileName;
  elem.setAttribute("style", "display:none;");
  (document.body || document.documentElement).appendChild(elem);
  if (typeof elem.click === "function") {
    elem.click();
  } else {
    elem.target = "_blank";
    elem.dispatchEvent(
      new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
      })
    );
  }
  URL.revokeObjectURL(elem.href);
  elem.remove();
};

const onCapture = (el: HTMLElement) => {
  htmlToImage.toPng(el).then(function (dataUrl) {
    saveAs(dataUrl, new Date().getTime().toString() + ".png");
  });
};

export default onCapture;
