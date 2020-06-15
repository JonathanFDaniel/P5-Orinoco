class infoTable {
    constructor(quantity) {
        this.quantity = quantity;
    }
}

let arrayProduct = [];

let arrayQuantity = [];

function showProduct(infosProduct) {
    
    const liElt = document.createElement('li');
    liElt.className = 'product-list'

        const consultArticleElt = document.createElement('div');
        consultArticleElt.className = 'article-information';

            const divElt1 = document.createElement('div');
            divElt1.className = 'div_img-list'

                const productImageElt = document.createElement('img')
                productImageElt.className = "product-image-list";
                productImageElt.src = infosProduct.imageUrl;

            const divElt2 = document.createElement('div');
            divElt2.className = 'div_product-list'

                const productNameElt = document.createElement('h4')
                productNameElt.innerHTML = infosProduct.name;

                const priceElt = document.createElement('p');
                priceElt.innerHTML = 'prix : ' + infosProduct.price + ' €';

        const addArticleElt = document.createElement('div');
        addArticleElt.className = 'div-add-article';

            /*const divElt3 = document.createElement('div');
            divElt3.className = 'div_product-list button-div'
 
                const quantityElt = document.createElement('div');
                quantityElt.className = "quantity";
                quantityElt.textContent = 0;

                const totalPriceElt = document.createElement('div');
                totalPriceElt.className = "totalPrice";
                totalPriceElt.textContent = 0; */

                const buttonElt = document.createElement('button');
                buttonElt.className = "button button-style";
                buttonElt.textContent = "Ajouter au panier";
    
    divElt1.appendChild(productImageElt);
    divElt2.appendChild(productNameElt);
    divElt2.appendChild(priceElt);
/*     divElt3.appendChild(quantityElt);
    divElt3.appendChild(totalPriceElt); 
    divElt3.appendChild(buttonElt);*/

    consultArticleElt.appendChild(divElt1);
    consultArticleElt.appendChild(divElt2);
    addArticleElt.appendChild(buttonElt)

    liElt.appendChild(consultArticleElt);
    liElt.appendChild(addArticleElt);

    document.getElementById('info').appendChild(liElt)

    consultArticleElt.addEventListener('mousemove', () => {
        productNameElt.style.color = "#e68a09";
    });
    consultArticleElt.addEventListener('mouseout', () => {
        productNameElt.style.color = "#343a40";
    });
    consultArticleElt.addEventListener('click', () => {

        document.getElementById('button-modal').addEventListener('click', addProduct);

        let modal = document.getElementById('modal');

        modal.style.top = "0px";
        document.getElementById('imageUrl').src = infosProduct.imageUrl;
        document.getElementById('name').innerHTML = infosProduct.name;
        document.getElementById('lenses').innerHTML = "<strong>Lentille : </strong>" + infosProduct.lenses;
        document.getElementById('description').innerHTML = "<strong>Description : </strong>" + infosProduct.description;
        document.getElementById('price').innerHTML = "<strong>Prix : </strong>" + infosProduct.price + " €";

    });
    document.getElementById('button-close').addEventListener("click", () => {
        modal.style.top = "-900px";
    });

    let addProduct = () => {

        //quantityElt.textContent ++;

        arrayProduct.push(infosProduct);
        console.log(arrayProduct)
        if (addProductValue === 0) {
            let addProductElt = document.createElement('span');
            addProductElt.id = "add-product";
            addProductElt.textContent = addProductValue;
            document.getElementById('add-basket').appendChild(addProductElt);
        }
        addProductValue ++;
        document.getElementById('add-product').textContent = addProductValue;
    }
    buttonElt.addEventListener('click', addProduct);

}

let httpRequest = new XMLHttpRequest();
    
    httpRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status == 200) {
            const products = JSON.parse(this.responseText);
            products.forEach(information => {
                showProduct(information);
            });
        }
    }

    httpRequest.open('GET', 'http://localhost:3000/api/cameras', true);
    httpRequest.send();
    
document.getElementById('shopping-basket').addEventListener('click', () => {
    let val = JSON.stringify(arrayProduct);
    localStorage.setItem('table', val);
    arrayProduct.innerHTML = 0;
}); 

let addProductValue = 0;