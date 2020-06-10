let getTotalPrise = localStorage.getItem('totalPrise');
let getPseudo = localStorage.getItem('pseudo');
let getEmail = localStorage.getItem('email');

document.getElementById('confirmeName').innerHTML = "Merci " + getPseudo + ".";

document.getElementById('pseudo').innerHTML = "<strong>Pseudo : </strong>" + getPseudo;
document.getElementById('email').innerHTML = "<strong>Email : </strong>" + getEmail;
document.getElementById('totalPrise').innerHTML = "<strong>Prix : </strong>" + getTotalPrise;
