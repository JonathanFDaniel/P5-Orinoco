class infoForm {
    constructor(surname, name, adress, city, email) {
        this.surname = surname;
        this.name = name;
        this.adress = adress;
        this.city = city;
        this.email = email;
    }
}
let tableForm = [];

document.getElementById("password").addEventListener("input", (e) => {
    let mdp = e.target.value;
    let longueurMdp = "faible";
    let couleurMsg = "red";
    if (mdp.length >= 8) {
        longueurMdp = "suffisante";
        couleurMsg = "green"; 
    } else if (mdp.length >= 4) {
        longueurMdp = "moyenne";
        couleurMsg = "orange";
    }
    let aideMdpElt = document.getElementById("security");
    aideMdpElt.textContent = longueurMdp;
    aideMdpElt.style.color = couleurMsg; 
});

document.getElementById("password").addEventListener("blur", function (e) {
    document.getElementById("password").textContent = "";
});


document.getElementById('password2').addEventListener('input', function() {
    
    let paragrapheErreur = document.getElementById("message-erreur");

    if (this.value != document.getElementById("password").value) {
        paragrapheErreur.innerHTML = "les deux mots de passe ne correspondent pas !";
    } else {
        paragrapheErreur.innerHTML = "";
    }
});

document.getElementById("inscription").addEventListener("submit", function (e) {

    let erreur;

    let inputs = this;

    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            erreur = "Veuillez renseigner tous les champs !";
            break;
        }
    }

    if (erreur) {
        (e).preventDefault();
        document.getElementById("message-erreur").innerHTML = erreur;
    } else {
        alert('Formulaire envoyé !');
    }
});

document.getElementById('button').addEventListener('click', () => {

    let surname1 = document.getElementById('surname').value;
    let name1 = document.getElementById('name').value;
    let adress1 = document.getElementById('adress').value;
    let city1 = document.getElementById('city').value;
    let email1 = document.getElementById('email').value;

    let newinfoForm = new infoForm (
        surname1,
        name1,
        adress1,
        city1,
        email1
    )
    tableForm.push(newinfoForm);
    let jsonTable = JSON.stringify(tableForm);
    localStorage.setItem('form', jsonTable);
});