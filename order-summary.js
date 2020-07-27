/* afficher le résumé de la commande */

let getArticles = JSON.parse(localStorage.getItem('products'));
let getForm = JSON.parse(localStorage.getItem('localStorageContact'));
let getTotalPrise = localStorage.getItem('totalPrise');
let getOrderId = localStorage.getItem('jsonOrderId');

document.getElementById('confirmeName').innerHTML = "Merci " + getForm.firstName + ".</br></br>Votre numéro de commande est le : <strong>" + getOrderId + "</strong>";

document.getElementById('name').innerHTML = "<strong>Prénom, Nom : </strong>" + getForm.firstName + " " + getForm.lastName;
document.getElementById('address').innerHTML = "<strong>Adresse : </strong>" + getForm.address;
document.getElementById('city').innerHTML = "<strong>Ville : </strong>" + getForm.city;
document.getElementById('email').innerHTML = "<strong>Email : </strong>" + getForm.email;

for (let i = 0; i < getArticles.length; i++) {
    let articles = document.createElement("span");
    articles.innerHTML =  "<strong>Articles : </strong>" + getArticles[i].name + "</br>" + "<strong>Prix : </strong>" + getArticles[i].price + " €" + "</br></br>";
    document.getElementById('articles').appendChild(articles); 
}
document.getElementById('totalPrise').innerHTML = "<strong>Prix Total : </strong>" + getTotalPrise; 

document.getElementById('back-button').addEventListener("click", () => { 
    localStorage.clear();
});