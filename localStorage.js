const reducer = (accumulator, currentValue) => accumulator + currentValue;

let arrayProduct = [];

let arrayProductQuantity = [];

let totalOrderQuantity = 0;

/* récupération du panier */

window.addEventListener('load', () => {
    let recupLocalStorage = JSON.parse(localStorage.getItem('products'));
    if (recupLocalStorage) {
        for (let i = 0; i < recupLocalStorage.length; i++)  {
            arrayProduct.push(recupLocalStorage[i]);
            arrayProductQuantity.push(recupLocalStorage[i].quantity);
        } 
        if (arrayProductQuantity.length > 0) {
            totalOrderQuantity += arrayProductQuantity.reduce(reducer);
            document.getElementById('add-product').style.display = "flex";
            document.getElementById('add-product').textContent = totalOrderQuantity; 
        } 
    }
});

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
    totalOrderQuantity ++;
    document.getElementById('add-product').textContent = totalOrderQuantity;
    localStorage.clear()
    if (!localStorage.products) {
        let arrayProductJson = JSON.stringify(arrayProduct);
        localStorages = localStorage.setItem('products', arrayProductJson);
    } 
}