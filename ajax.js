function ajaxGet(url, callback) {
    let httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", url);
    httpRequest.addEventListener("load", function () {
        if (httpRequest.status >= 200 && httpRequest.status < 400) {
            callback(httpRequest.responseText);
        } else {
            console.error(httpRequest.status + " " + httpRequest.statusText + " " + url);
        }
    });
    httpRequest.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    httpRequest.send();
}