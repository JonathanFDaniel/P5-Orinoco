
let addProductValue = 0;

document.getElementById('productListe').addEventListener("click", () => {
    if (addProductValue === 0) {
        let addProductElt = document.createElement('span');
        addProductElt.id = "add-product";
        addProductElt.textContent = addProductValue;
        document.getElementById('add-basket').appendChild(addProductElt);
    }
    addProductValue ++;
    document.getElementById('add-product').textContent = addProductValue;
});