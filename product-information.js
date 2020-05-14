/*<div class="home-section" id="home-section">
<a title="Caméras vintage" href="produit.html">
<p class="result"></p>
<p class="name"></p>
<p class="price"></p>
<p class="description"></p></a>
<img class="imageURL">
<a href="panier.html"><input class="button-style" type="submit" value="ajouter au panier"></a><br>
</div>*/
class ProductInformation {
    constructor (id, name, price, description, imageUrl) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
    }
    showProduct () {
       /* document.getElementById('result').innerHTML = this.id;
        document.getElementById('name').innerHTML = this.name;
        document.getElementById('price').innerHTML = this.price;
        document.getElementById('description').innerHTML = this.description;
        document.getElementById('imageURL').src = this.imageUrl;*/
        document.getElementById('productListe').innerHTML += `
            <div class="home-section">
            <a title="Caméras vintage" href="produit.html">
            <p class="result">${this.id}</p>
            <p class="name">${this.name}</p>
            <p class="price">${this.price}</p>
            <p class="description">${this.description}</p></a>
            <img class="image" src="${this.imageUrl}">
            <a href="panier.html"><input class="button-style" type="submit" value="ajouter au panier"></a><br>
            </div>`;
    }
}

let httpRequest = new XMLHttpRequest();
    
    httpRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status == 200) {
            const products = JSON.parse(this.responseText);
        products.forEach( function (product) {
            let camera1 = new ProductInformation (
                product._id,
                product.name,
                product.price,
                product.description,
                product.imageUrl
            );
            camera1.showProduct();
        });
        }
    }

    httpRequest.open('GET', 'http://localhost:3000/api/cameras', true);
    httpRequest.send();




    /*document.querySelector('#name').innerText =  `${camera.name}`;
    document.querySelector('#price').innerText =  `${camera.price} €`;
    document.querySelector('#description').innerText =  `${camera.description}`;

document.getElementById('home-section').addEventListener('submit', function() {
    
});*/