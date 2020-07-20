    const bear = new Image();
    bear.classList ="image-index";
    bear.src = "http://localhost:3000/images/teddy_1.jpg";
    bear.alt = "bear"; 

    const aCamera = document.createElement("a");
    aCamera.href = "product.html";

        const camera = new Image();
        camera.classList ="image-index";
        camera.src = "http://localhost:3000/images/vcam_1.jpg";
        camera.alt = "camera";

    const furniture = new Image();
    furniture.classList ="image-index";
    furniture.src = "http://localhost:3000/images/oak_1.jpg";
    furniture.alt = "furniture";

    aCamera.appendChild(camera);
    
    document.getElementById("bear").appendChild(bear);
    document.getElementById("camera").appendChild(aCamera);
    document.getElementById("furniture").appendChild(furniture);