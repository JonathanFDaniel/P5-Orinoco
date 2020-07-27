let productsResult = JSON.parse(localStorage.getItem('products'));

const product_id = [];

const tableForm = [];

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
        paragrapheErreur.innerHTML = "mots de passe incorrect !";
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

/* valider la commmande */

document.getElementById('order-validate').addEventListener('click', () => {

    for (let i = 0; i < productsResult.length; i++) {
        product_id.push(productsResult[i]._id);
    }  

    let contacts = new Object ()
        contacts.firstName = document.getElementById('firstName').value;
        contacts.lastName = document.getElementById('lastName').value;
        contacts.address = document.getElementById('address').value;
        contacts.city = document.getElementById('city').value;
        contacts.email = document.getElementById('email').value;


    const orderCameras =  new Object();
    orderCameras.contact = contacts;
    orderCameras.products = product_id;

    localStorage.setItem("localStorageContact", JSON.stringify(contacts))

    const orderCamera = JSON.stringify(orderCameras)

    const request = new XMLHttpRequest();
    request.open("Post", "http://localhost:3000/api/cameras/order");
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(orderCamera);
    request.addEventListener("load", function () {
        if (request.status == 201) {
            let jsonRequest = JSON.parse(request.responseText);
            console.log(jsonRequest.orderId);
            localStorage.setItem("jsonOrderId", jsonRequest.orderId);
        } else {
            console.log('Bad request!');
        } 
    }); 
});
    