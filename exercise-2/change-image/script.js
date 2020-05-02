// Write a function that creates img elements that have 
//a random image from source.unsplash (example: https://source.unsplash.com/random/300x300)

// Make it so that every time mouse enters the image it reloads some other image

function addNewImage(){
    let size = 100 + Math.round(Math.random()*400); 
    document.body.appendChild(createImage(size,size));

}

function createImage(width, height){
    const imageElement = document.createElement('img');
    
    imageElement.src = `https://source.unsplash.com/random/${width}x${height}`;
    
    imageElement.onmouseenter = function(){ 
        let size = 100 + Math.round(Math.random()*400); 
        imageElement.src = `https://source.unsplash.com/random/${size}x${size}`
    };       
        return imageElement;
}


addNewImage();
addNewImage();
addNewImage();
addNewImage();
addNewImage();
addNewImage();
addNewImage();
addNewImage();
addNewImage();
addNewImage();
 
/**
via event: 

function changeImageSource(event){
    let size = 100 + Math.round(Math.random()*400); // between 100 and 500
    event.target.src = `https://source.unsplash.com/random/${size}x${size}`;
}

function createImage(width, height){
    const imageElement = document.createElement('img');    
    imageElement.src = `https://source.unsplash.com/random/${width}x${height}`;
    imageElement.onmouseenter = changeImageSource;       
        return imageElement;
}
 */