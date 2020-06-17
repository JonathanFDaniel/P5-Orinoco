let getArticles = JSON.parse(localStorage.getItem('products'));
let getForm = JSON.parse(localStorage.getItem('localStorageContact'));
let getTotalPrise = localStorage.getItem('totalPrise');

document.getElementById('confirmeName').innerHTML = "Merci " + getForm.firstName + ".";

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
