let productPage = [];

let localStorages;

/*liste d'articles*/

function showProduct(infosProduct) {
    
    const liElt = document.createElement('li');
    liElt.className = 'product-list'

        const consultArticleElt = document.createElement('a');
        consultArticleElt.className = 'article-information';
        consultArticleElt.href = 'product-page.html'; 

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
        addArticleElt.className = 'div-add-article div-add-delete';

            const buttonElt = document.createElement('button');
            buttonElt.className = "button button-style";
            buttonElt.textContent = "Ajouter au panier";

            const buttonRemoveArticle = document.createElement('button');
            buttonRemoveArticle.className = "button button-style";
            buttonRemoveArticle.textContent = "supprimer";
    
    divElt1.appendChild(productImageElt);
    divElt2.appendChild(productNameElt);
    divElt2.appendChild(priceElt);

    consultArticleElt.appendChild(divElt1);
    consultArticleElt.appendChild(divElt2);
    
    addArticleElt.appendChild(buttonElt);
    addArticleElt.appendChild(buttonRemoveArticle);

    liElt.appendChild(consultArticleElt);
    liElt.appendChild(addArticleElt);

    document.getElementById('info').appendChild(liElt);

/*fonction de consultation de l'article*/

    consultArticleElt.addEventListener('mousemove', () => {
        productNameElt.style.color = "#e68a09";
    });

    consultArticleElt.addEventListener('mouseout', () => {
        productNameElt.style.color = "#343a40";
    });
    
    consultArticleElt.addEventListener('click', e => {
        localStorage.setItem("productPage", JSON.stringify(infosProduct));
    }); 

/* fonction d'ajout au panier */

    buttonElt.addEventListener('click', e => {addProduct(infosProduct)});

    buttonRemoveArticle.addEventListener('click', e => {removeProduct(infosProduct)});
}

/* requête ajax : GET */

let getArticles = function () {
    ajaxGet("http://localhost:3000/api/cameras")
    .then(function (response) {
        let articles = JSON.parse(response);
        articles.forEach(information => {
            information.quantity = 1;
            information.totalPrixProduct = information.price;
            showProduct(information);
        });
    }).catch(function (error) {
        console.log(error);
    });
}
console.log(getArticles()); 

/*supprimer des articles au panier*/

function removeProduct(infosProduct) {

    const index = arrayProduct.findIndex(item => item._id === infosProduct._id);

    if (index > -1) {
        if (arrayProduct[index].quantity === 1) {
            totalOrderQuantity --;
            arrayProduct.splice(index, 1);
            document.getElementById('add-product').textContent = totalOrderQuantity;
        } else {
            arrayProduct[index].quantity--;
            totalOrderQuantity --;
            document.getElementById('add-product').textContent = totalOrderQuantity;
        }
    }
    if (totalOrderQuantity === 0) {
        document.getElementById('add-product').style.display = "none"; 
    }

    localStorage.clear()
    if (!localStorage.products) {
        let arrayProductJson = JSON.stringify(arrayProduct);
        localStorages = localStorage.setItem('products', arrayProductJson);
    } 
}