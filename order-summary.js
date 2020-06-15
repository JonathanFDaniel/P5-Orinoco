let getArticles = JSON.parse(localStorage.getItem('table'));
let getForm = JSON.parse(localStorage.getItem('form'));
let getTotalPrise = localStorage.getItem('totalPrise');

document.getElementById('confirmeName').innerHTML = "Merci " + getForm[0].name + ".";

document.getElementById('name').innerHTML = "<strong>Prénom, Nom : </strong>" + getForm[0].surname + " " + getForm[0].name;
document.getElementById('adress').innerHTML = "<strong>Adresse : </strong>" + getForm[0].adress;
document.getElementById('city').innerHTML = "<strong>Ville : </strong>" + getForm[0].city;
document.getElementById('email').innerHTML = "<strong>Email : </strong>" + getForm[0].email;

for (let i = 0; i < getArticles.length; i++) {
    let articles = document.createElement("span");
    articles.innerHTML =  "<strong>Articles : </strong>" + getArticles[i].name + "</br>" + "<strong>Prix : </strong>" + getArticles[i].price + " €" + "</br></br>";
    document.getElementById('articles').appendChild(articles); 
}
document.getElementById('totalPrise').innerHTML = "<strong>Prix Total : </strong>" + getTotalPrise; 
