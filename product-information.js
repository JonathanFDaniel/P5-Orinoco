let httpRequest = new XMLHttpRequest();
    
    httpRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            document.getElementById('result').innerHTML = response[1]._id
            document.getElementById('name').innerHTML = response[1].name
            document.getElementById('price').innerHTML = response[1].price
            document.getElementById('description').innerHTML = response[1].description
            /*let imageUL = new Image();
            imageUL.url = response[1].imageURL*/

            document.getElementById('imageURL').src = "http://localhost:3000/images/vcam_1.jpg"

            //class ProductInformation {
                //constructor (/*id, */name/*, price, description, imageURL*/) {
                    //this.id = id;
                    //this.name = name;
                    //this.price = price;
                    //this.description = description;
                    //this.imageURL = imageURL;
                //}
            //}
            //let camera = new ProductInformation (
                //response[1].name
            //);
            
            /*let response = JSON.parse(this.responseText);
            result.innerHTML= '';
            let ul = document.createElement('ul')
            result.appendChild(ul)
            for (let i = 0; i < result.length; i++) {
                let li = document.createElement('li')
                li.innerHTML = response[i].name
                ul.appendChild(li)
            }*/
        }
    }

    httpRequest.open('GET', 'http://localhost:3000/api/cameras', true);
    httpRequest.send();



    /*document.querySelector('#name').innerText =  `${camera.name}`;
    document.querySelector('#price').innerText =  `${camera.price} €`;
    document.querySelector('#description').innerText =  `${camera.description}`;

document.getElementById('home-section').addEventListener('submit', function() {
    
});*/