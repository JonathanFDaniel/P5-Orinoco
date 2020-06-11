let result = JSON.parse(localStorage.getItem('table')); 

let table = false;

let infoProducts = false;

let totalAmount = 0;

let productInList = [];

if ( result === null ) {
    document.getElementById('blank').textContent = "votre panier est vide";
} else { 
    const tableElt = document.createElement('table');
    tableElt.className = 'recap-table';

            const theadElt = document.createElement('thead');
            theadElt.className = 'recap-thead';

            const tbodyElt = document.createElement('tbody');
            tbodyElt.className = 'recap-tbody';
            tbodyElt.id = 'boby1'

            const tfootElt = document.createElement('tfoot');
            tfootElt.className = 'recap-tfoot';

            if  (table === false) {  

                const trTheadElt = document.createElement('tr');
                trTheadElt.className = 'recap-tr-thead';

                    const thTheadElt1 = document.createElement('th');
                    thTheadElt1.className = 'recap-th-thead';
                    thTheadElt1.setAttribute('colspan','3');
                    thTheadElt1.textContent = 'Article';

                    const thTheadElt2 = document.createElement('th');
                    thTheadElt2.className = 'recap-th-thead';
                    thTheadElt2.textContent = 'Quantité';

                    const thTheadElt3 = document.createElement('th');
                    thTheadElt3.className = 'recap-th-thead';
                    thTheadElt3.textContent = 'Prix total';
            
                const trTfootElt = document.createElement('tr');
                trTfootElt.className = 'recap-tr-Tfoot';

                    const tdTfootElt1 = document.createElement('td');
                    tdTfootElt1.className = 'result'; 
                    tdTfootElt1.setAttribute('colspan','4');
        
                        const inputTfootElt = document.createElement('input');
                        inputTfootElt.type = 'submit'; 
                        inputTfootElt.className = 'button-style';
                        inputTfootElt.id = 'delete'; 
                        inputTfootElt.value = 'Supprimer le panier'; 
                    
                    const tdTfootElt2 = document.createElement('td');
                    tdTfootElt2.className = 'result';

                        const spanTfootElt1 = document.createElement('span');
                        spanTfootElt1.className = 'title-total';
                        spanTfootElt1.textContent = 'Montant total : ';  

                        const spanTfootElt2 = document.createElement('span');
                        spanTfootElt2.className = 'amount';
                        spanTfootElt2.textContent = "";  
            
        tdTfootElt2.appendChild(spanTfootElt1);
        tdTfootElt2.appendChild(spanTfootElt2);
        tdTfootElt1.appendChild(inputTfootElt);
        trTfootElt.appendChild(tdTfootElt1); 
        trTfootElt.appendChild(tdTfootElt2); 
        tfootElt.appendChild(trTfootElt);  

        trTheadElt.appendChild(thTheadElt1);
        trTheadElt.appendChild(thTheadElt2);
        trTheadElt.appendChild(thTheadElt3);

        theadElt.appendChild(trTheadElt);
        tfootElt.appendChild(trTfootElt); 

        tableElt.appendChild(theadElt);
        tableElt.appendChild(tbodyElt);
        tableElt.appendChild(tfootElt);   

        table = true;
        
            function showProduct(infosProduct) {
            
                let quantity = 0;//document.getElementById(toto);

                if (quantity === 0) {

                quantity ++; 

                const trTbodyElt = document.createElement('tr');
                trTbodyElt.className = 'recap-tr-tbodyElt';

                    const tdTbodyElt1 = document.createElement('img');
                    tdTbodyElt1.className = 'recap-td-tbody image2';
                    tdTbodyElt1.src = infosProduct.imageUrl;

                    const tdTbodyElt2 = document.createElement('td');
                    tdTbodyElt2.className = 'recap-td-tbody';
                    tdTbodyElt2.textContent = infosProduct.name;


                    const tdTbodyElt3 = document.createElement('td');
                    tdTbodyElt3.className = 'recap-td-tbody';
                    tdTbodyElt3.textContent = infosProduct.name;


                    const tdTbodyElt4 = document.createElement('td');
                    tdTbodyElt4.className = 'recap-td-tbody';
                    tdTbodyElt4.id = 'toto';
                    tdTbodyElt4.textContent = quantity;

                    
                    const tdTbodyElt5 = document.createElement('td');
                    tdTbodyElt5.className = 'recap-td-tbody';
                    tdTbodyElt5.textContent = infosProduct.price + " €";
        
                    trTbodyElt.appendChild(tdTbodyElt1);    
                    trTbodyElt.appendChild(tdTbodyElt2);    
                    trTbodyElt.appendChild(tdTbodyElt3);    
                    trTbodyElt.appendChild(tdTbodyElt4);  
                    trTbodyElt.appendChild(tdTbodyElt5);

                    tbodyElt.appendChild(trTbodyElt); 

                } else {
                quantity ++
                document.getElementById('add-product').textContent = addProductValue;


                //let toto = document.getElementById("toto");
                //consol
                //toto.textContent = quantity;
                } 
            } 
             
            result.forEach(information => {
                showProduct(information);
            });
        document.getElementById('commande').appendChild(tableElt);  

        document.getElementById("delete").addEventListener("click", () => {
            localStorage.clear();
        }); 
    }

    for (let i = 0; i < result.length; i++) {
        totalAmount += Number(result[i].price); 
        //quantity += Number(result[i].quantity)
        //console.log(quantity)
    }  
    let amount = document.getElementsByClassName('amount');  
    amount[0].innerHTML = totalAmount + " €";
    /*let totalPrise = amount[0].innerHTML;
    localStorage.setItem('totalPrise', totalPrise); */
}  
