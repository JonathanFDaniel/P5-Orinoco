let recupProductPage = JSON.parse(localStorage.getItem('productPage'));

/* récupération du panier */

window.addEventListener('load', () => {

    console.log(recupProductPage[0])

    const camera = new Image();
    camera.classList = "product-image-modal";
    camera.src = recupProductPage[0].imageUrl;
    document.getElementById('imageUrl').innerHTML = "";
    camera.alt = "camera";

    document.getElementById('imageUrl').appendChild(camera);
    document.getElementById('name').innerHTML = recupProductPage[0].name;
    document.getElementById('lenses1').innerHTML = "Lentille : " + recupProductPage[0].lenses[0];
    document.getElementById('lenses2').innerHTML = "Lentille : " + recupProductPage[0].lenses[1];
    document.getElementById('description').innerHTML = "<strong>Description : </strong>" + recupProductPage[0].description;
    document.getElementById('price').innerHTML = "<strong>Prix : </strong>" + recupProductPage[0].price + " €";

});

/* requête ajax : GET */

/* let resp = "/5be1ed3f1c9d44000030b061";

let getCamera = function () {
    ajaxGet("http://localhost:3000/api/cameras" + resp)
    .then(function (response) {
        console.log(response)
        let articles = JSON.parse(response);
    }).catch(function (error) {
        console.log(error);
    });
}
console.log(getCamera());  */