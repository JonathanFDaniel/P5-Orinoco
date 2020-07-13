let ajaxGet = (url) => { 

    return new Promise(function (resolve, reject) {
    
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText)
                    console.log('terminé', xhr)
                } else {
                    reject(xhr)
                }
            }
        } 

        xhr.open('GET', url, true);
        xhr.send();
    });
} 