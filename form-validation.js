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

