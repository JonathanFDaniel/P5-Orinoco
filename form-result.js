let getTotalPrise = localStorage.getItem('totalPrise');
let getForm = JSON.parse(localStorage.getItem('form'));

document.getElementById('confirmeName').innerHTML = "Merci " + getForm[0].name + ".";

document.getElementById('name').innerHTML = "<strong>Prénom, Nom : </strong>" + getForm[0].surname + " " + getForm[0].name;
document.getElementById('adress').innerHTML = "<strong>Adresse : </strong>" + getForm[0].adress;
document.getElementById('city').innerHTML = "<strong>Ville : </strong>" + getForm[0].city;
document.getElementById('email').innerHTML = "<strong>Email : </strong>" + getForm[0].email;

document.getElementById('totalPrise').innerHTML = "<strong>Prix : </strong>" + getTotalPrise; 
