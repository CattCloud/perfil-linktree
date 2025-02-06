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
