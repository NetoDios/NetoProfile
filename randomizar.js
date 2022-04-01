var images = ["Blue.png",
"Killer.png",
"low Gray.png",
"Red.png",
"rojokul.png",
"Supreme.png",
"Tank.png"];

const imgDiv = document.getElementById("ImagesHere");
GoRandom();

function GoRandom(){
    imgDiv.innerHTML = "";
    images.sort( ()=>Math.random()-0.5 );
    console.log(images);
    images.forEach(png => {
        var newImg = document.createElement("img");
        newImg.src = "imagenes/"+png;
        newImg.classList.add("NiceImage");
        imgDiv.appendChild(newImg);
    });
}