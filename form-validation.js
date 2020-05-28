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
        console.log(inputs);
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
    let pseudo = document.getElementById('pseudo').value;
    let email = document.getElementById('email').value;

    localStorage.setItem('pseudo', pseudo);
    localStorage.setItem('email', email);
});
