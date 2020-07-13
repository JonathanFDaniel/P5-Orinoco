let arrayProduct = [];

/*récupération du panier*/

window.addEventListener('load', () => {
    let recupLocalStorage = JSON.parse(localStorage.getItem('products'));

    if (!recupLocalStorage) {
        console.log('panier vide !');
    } else {
        for (let i = 0; i < recupLocalStorage.length; i++)  {
            arrayProduct.push(recupLocalStorage[i]);
        } 
    localStorage.clear();  
    }
});

/*liste d'articles*/

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

/*fonction*/

    consultArticleElt.addEventListener('mousemove', () => {
        productNameElt.style.color = "#e68a09";
    });
    consultArticleElt.addEventListener('mouseout', () => {
        productNameElt.style.color = "#343a40";
    });
    consultArticleElt.addEventListener('click', e => {consultProducts(infosProduct)});

/*fonction d'ajout au panier*/

    buttonElt.addEventListener('click', e => {addProduct(infosProduct)});

    buttonRemoveArticle.addEventListener('click', e => {removeProduct(infosProduct)});

}

/*fenêtre modale*/

function consultProducts(infosProduct) {

    const index = arrayProduct.findIndex(item => item._id === infosProduct._id);

/*     let getOneCamera = function () {
        ajaxGet("http://localhost:3000/api/cameras")
        .then(function (response) {
            let camera = JSON.parse(response);
            camera.forEach(information => {
            showProduct(information); 
            });
        }).catch(function (error) {
            console.log(error);
        });
    }
    console.log(getOneCamera());  */
    /*modaleProduct = [];
    modaleProduct.push(infosProduct);
    console.log(modaleProduct); */
    
    document.getElementById('button-modal').addEventListener('click', e => {addProduct(infosProduct)});

    let modal = document.getElementById('modal');

    modal.style.display = "block";
    document.getElementById('imageUrl').src = infosProduct.imageUrl;
    document.getElementById('name').innerHTML = infosProduct.name;
    document.getElementById('lenses1').innerHTML = "Lentille : " + infosProduct.lenses[0];
    document.getElementById('lenses2').innerHTML = "Lentille : " + infosProduct.lenses[1];
    document.getElementById('description').innerHTML = "<strong>Description : </strong>" + infosProduct.description;
    document.getElementById('price').innerHTML = "<strong>Prix : </strong>" + infosProduct.price + " €";

    document.getElementById('button-close').addEventListener("click", () => {
        modal.style.display = "none";
    });
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

/*  */
    
let localStorages;

let addProductValue = 0;

/*ajouter des articles au panier*/

function addProduct(infosProduct) {
    
    const index = arrayProduct.findIndex(item => item._id === infosProduct._id);
    
    if (index !== -1) {        
        arrayProduct[index].quantity++;
        arrayProduct[index].totalPrixProduct += Number(infosProduct.price); 
    } else {
        arrayProduct.push(infosProduct);
        document.getElementById('add-product').style.display = "flex"; 
    }
    addProductValue ++;
    document.getElementById('add-product').textContent = addProductValue; 
}

/*supprimer des articles au panier*/

function removeProduct(infosProduct) {
    const index = arrayProduct.findIndex(item => item._id === infosProduct._id);

    if (index > -1) {
        if (arrayProduct[index].quantity === 1) {
            arrayProduct.splice(index, 1);
        } else {
            arrayProduct[index].quantity--;
            addProductValue --;
            document.getElementById('add-product').textContent = addProductValue;
        }
    }
    if (addProductValue === 0) {
        document.getElementById('add-product').style.display = "none"; 
    }
}

document.getElementById('shopping-basket').addEventListener('click', () => {
    if (!localStorage.products) {
        let arrayProductJson = JSON.stringify(arrayProduct);
        localStorages = localStorage.setItem('products', arrayProductJson);
    }
}); 