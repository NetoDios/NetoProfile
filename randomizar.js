var images = [
"Ankylosaurus.png",
"Blue.png",
"Brontosaurus.png",
"Dimetrodon.png",
"Estegosaurio.png",
"Killer.png",
"low Gray.png",
"Parasaurolophus.png",
"Plesiosaurus.png",
"Pterodáctilos.png",
"Red.png",
"Spinosaurus.png",
"Supreme.png",
"Tank.png",
"Taxi.png",
"TiranosaurioRex.png",
"Tricerátops.png",
"Velociraptor.png"];

const imgDiv = document.getElementById("ImagesHere");
GoRandom();

function GoRandom(){
    imgDiv.innerHTML = "";
    images.sort( ()=>Math.random()-0.5 );
    console.log(images);
    images.forEach(png => {
        var lediv = document.createElement("div");
        lediv.classList.add("NiceDiv")
        var newImg = document.createElement("img");
        newImg.src = "imagenes/"+png;
        newImg.classList.add("NiceImage");
        lediv.appendChild(newImg);
        imgDiv.appendChild(lediv);
    });
}