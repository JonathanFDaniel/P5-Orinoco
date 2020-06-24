let totalAmount = [];

function showProduct(infosProduct) {
    
    const liElt = document.createElement('li');
    liElt.className = 'product-list'

        const consultArticleElt = document.createElement('a');
        consultArticleElt.className = 'article-information';
        consultArticleElt.href = '#modal';

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

            const buttonElt = document.createElement('button');
            buttonElt.className = "button button-style";
            buttonElt.textContent = "Ajouter au panier";
    
    divElt1.appendChild(productImageElt);
    divElt2.appendChild(productNameElt);
    divElt2.appendChild(priceElt);

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

        modal.style.display = "block";
        document.getElementById('imageUrl').src = infosProduct.imageUrl;
        document.getElementById('name').innerHTML = infosProduct.name;
        document.getElementById('lenses').innerHTML = "<strong>Lentille : </strong>" + infosProduct.lenses;
        document.getElementById('description').innerHTML = "<strong>Description : </strong>" + infosProduct.description;
        document.getElementById('price').innerHTML = "<strong>Prix : </strong>" + infosProduct.price + " €";
    });
    document.getElementById('button-close').addEventListener("click", () => {
        modal.style.display = "none";
    });

    buttonElt.addEventListener('click', e => {addProduct(infosProduct)});

}

let httpRequest = new XMLHttpRequest();
    
    httpRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status == 200) {
            const products = JSON.parse(this.responseText);
            products.forEach(information => {
                information.quantity = 1;
                information.totalPrixProduct = information.price;
                showProduct(information);
            });
        }
    }

    httpRequest.open('GET', 'http://localhost:3000/api/cameras', true);
    httpRequest.send();
    
    let localStorages;

let arrayProduct = [];

let addProductValue = 0;

function addProduct(infosProduct) {
    const index = arrayProduct.findIndex(item => item._id === infosProduct._id);
    
    if (index !== -1) {
        arrayProduct[index].quantity++;
        console.log(arrayProduct.price)
        arrayProduct[index].totalPrixProduct += Number(infosProduct.price); 
    } else {
        arrayProduct.push(infosProduct);
    }
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

document.getElementById('shopping-basket').addEventListener('click', () => {
    if (localStorages === undefined ) {
        let val = JSON.stringify(arrayProduct);
        localStorages = localStorage.setItem('products', val);
        arrayProduct.innerHTML = 0;
    }
}); 