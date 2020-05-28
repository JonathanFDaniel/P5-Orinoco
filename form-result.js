let getPseudo = localStorage.getItem('pseudo');
let getEmail = localStorage.getItem('email');

document.getElementById('confirmeName').innerHTML = "merci " + getPseudo + " " + getEmail;