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

        const divElt1 = document.createElement('div');
        divElt1.className = 'div_img-list'

            const productImageElt = document.createElement('img')
            productImageElt.className = "product-image";
            productImageElt.src = infosProduct.imageUrl;

        const divElt2 = document.createElement('div');
        divElt2.className = 'div_product-list'

            const productNameElt = document.createElement('h4')
            productNameElt.innerHTML = infosProduct.name;

            const idElt = document.createElement('p')
            idElt.innerHTML = "<strong>Référence : </strong>" + infosProduct._id;

            const lensesElt = document.createElement('p')
            lensesElt.innerHTML = "<strong>lentille : </strong>" + infosProduct.lenses;

            const descriptionElt = document.createElement('p')
            descriptionElt.className = "product-description";
            descriptionElt.innerHTML = "<strong>Informations : </strong>" + infosProduct.description;

        const divElt3 = document.createElement('div');
        divElt3.className = 'div_product-list'

            const priceElt = document.createElement('p');
            priceElt.innerHTML = 'prix : ' + infosProduct.price + ' €';

            const quantityElt = document.createElement('div');
            quantityElt.className = "quantity";
            quantityElt.textContent = 0;

            const totalPriceElt = document.createElement('div');
            totalPriceElt.className = "totalPrice";
            totalPriceElt.textContent = 0;

            const buttonElt = document.createElement('button');
            buttonElt.className = "button button-style";
            buttonElt.textContent = "Ajouter au panier";
    
    divElt1.appendChild(productImageElt);
    divElt2.appendChild(productNameElt);
    divElt2.appendChild(idElt);
    divElt2.appendChild(lensesElt);
    divElt2.appendChild(descriptionElt);
    divElt3.appendChild(priceElt);
    divElt3.appendChild(quantityElt);
    divElt3.appendChild(totalPriceElt);
    divElt3.appendChild(buttonElt);

    liElt.appendChild(divElt1);
    liElt.appendChild(divElt2);
    liElt.appendChild(divElt3);

    document.getElementById('info').appendChild(liElt)

    buttonElt.addEventListener('click', () => {

        quantityElt.textContent ++;
        /*quantity1 = 5;
        const newInfoTable1 = new infoTable(
            quantity1 
        ) */
        //console.log(newInfoTable1)
        //let totalPrices = document.getElementsByClassName(totalPrice);
        //totalPrices.textContent += Number(infosProduct.price)
        arrayProduct.push(infosProduct);
        //arrayQuantity.push(newInfoTable1); 
        //console.log(infosProduct);
    }); 
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
    
document.getElementById('panier').addEventListener('click', () => {
    let val = JSON.stringify(arrayProduct);
    localStorage.setItem('table', val);
    arrayProduct.innerHTML = 0;
}); 
