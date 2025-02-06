let titulo=document.getElementById("container_titulo");
// Crea el elemento h1
let h1 = document.createElement("h1");
h1.textContent = "Los Gatos";

// Crea el elemento p
let p = document.createElement("p");
p.textContent = "Animales tiernos con la capacidad de dominar el internet";

// Añade los elementos al contenedor
titulo.appendChild(h1);
titulo.appendChild(p);

// Obtener referencias a los elementos
const miDiv1 = document.getElementById("container1");
const miDiv2 = document.getElementById("container2");
const miDiv3 = document.getElementById("container3");

const miImagen = document.getElementById("img_perfil");

miDiv1.addEventListener("click", function() {
    miImagen.src = "img/gato3.png";
  });
miDiv2.addEventListener("click", function() {
    miImagen.src = "img/gato4.jpg";
});
miDiv3.addEventListener("click", function() {
    miImagen.src = "img/gato5.png";
});
