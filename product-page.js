let recupProductPage = JSON.parse(localStorage.getItem('productPage'));

/* récupération du panier */

window.addEventListener('load', () => {

    console.log(recupProductPage)

    const camera = new Image();
    camera.classList = "product-image-modal";
    camera.src = recupProductPage.imageUrl;
    document.getElementById('imageUrl').innerHTML = "";
    camera.alt = "camera";

    document.getElementById('imageUrl').appendChild(camera);
    document.getElementById('name').innerHTML = recupProductPage.name;
    document.getElementById('lenses1').innerHTML = "Lentille : " + recupProductPage.lenses[0];
    document.getElementById('lenses2').innerHTML = "Lentille : " + recupProductPage.lenses[1];
    document.getElementById('description').innerHTML = "<strong>Description : </strong>" + recupProductPage.description;
    document.getElementById('price').innerHTML = "<strong>Prix : </strong>" + recupProductPage.price + " €";

    document.getElementById("button-page").addEventListener('click', function () {
        addProduct(recupProductPage);
    });
});