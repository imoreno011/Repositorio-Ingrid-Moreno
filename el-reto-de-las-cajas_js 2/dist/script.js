//Inicio de script para el reto de las cajas, DOM JS//

//1.Cuando hjaga click en el btn-cajas-itulose cambie el titulo de las cajas//

document.getElementById("btn-cajas-titulo").addEventListener("click",()=>
    {
  
  const titulocajas = 
        document.getElementById("titulo-cajas");
  titulocajas.textContent = "Ingrid Moreno";
});

//2. Cambiar el color de la caja//

document.getElementById("btn-cajas-color").addEventListener("click",()=>
{
 const cajas =
  document.getElementsByClassName("caja");
  for (let i = 0; i < cajas.length; i++)
    {
      cajas[i].style.backgroundColor = "#51D9FF";
    }
 
});

//3. Cambiar el color de la primera caja//

document.getElementById("btn-primera-caja").addEventListener("click",()=>
 {
  const primeracaja =
        document.querySelector(".caja");
  primeracaja.style.backgroundColor = "#FCC9FF";
});

//4. Cambiar el color al borde de las cajas//

document.getElementById("btn-borde").addEventListener("click",()=>       {
  const bordecaja =
        
        document.querySelectorAll(".caja");
  bordecaja.forEach(caja =>
                   {
    caja.style.border = "10px solid #C205CC";
  });
  
});
//5. Referencias para agregar las imágenes//
const imageUrlInput = document.getElementById('imageUrlInput');
const addImageBtn = document.getElementById('addImageBtn');
const galleryContainer = document.getElementById('galleryContainer');

// Evento al hacer clic en el botón
addImageBtn.addEventListener('click', () => {
  const imageUrl = imageUrlInput.value.trim();
  
  if (imageUrl) {
    // Crear un nuevo contenedor para la imagen
    const col = document.createElement('div');
    col.classList.add('col'); // Para usar la rejilla de Bootstrap

    // Crear la imagen
    const img = document.createElement('img');
    img.src = imageUrl;
    img.classList.add('img-fluid', 'rounded', 'shadow-sm'); 
    img.alt = 'Imagen añadida';

    // Agregar la imagen dentro del contenedor
    col.appendChild(img);

    // Añadir el contenedor a la galería
    galleryContainer.appendChild(col);

    // Limpiar input
    imageUrlInput.value = '';
  } else {
    alert('Por favor ingresa una URL válida.');
  }
});