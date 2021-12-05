(function() {
  if (
    location.protocol !== "https:" &&
    !(location.href.indexOf("localhost") > -1)
  ) {
    location.replace(
      `https:${location.href.substring(location.protocol.length)}`
    );
    return;
    var httpsTestUrl = window.location.href.replace("http:", "https:") + "";
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.status === 200) {
        location.replace(
          `https:${location.href.substring(location.protocol.length)}`
        );
      }
    };
    xhr.open("GET", httpsTestUrl, true);
    xhr.send();
  }
})();
