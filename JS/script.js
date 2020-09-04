const almacen = {
  //Frutas
  Platano: {
    precio: 3,
    variedad: "canario",
    stock: 4,
  },
  Uvas: {
    precio: 1.5,
    variedad: "moradas",
    stock: 5,
  },

  Piña: {
    precio: 3,
    variedad: "tropical",
    stock: 4,
  },

  Sandia: {
    precio: 3.5,
    variedad: "roja",
    stock: 7,
  },
  Manzana: {
    precio: 0.7,
    variedad: "rojas",
    stock: 10,
  },
  Fresa: {
    precio: 2.3,
    variedad: "eco",
    stock: 9,
  },
  //Verduras
  Espinaca: {
    precio: 0.6,
    variedad: "eco",
    stock: 3,
  },
  Lechuga: {
    precio: 1.3,
    variedad: "iceberg",
    stock: 5,
  },
  Pepino: {
    precio: 0.55,
    variedad: "holandez",
    stock: 7,
  },
  PimientoRojo: {
    precio: 0.65,
    variedad: "ecologico",
    stock: 11,
  },
  PimientoVerde: {
    precio: 0.65,
    variedad: "ecologico",
    stock: 10,
  },
  Tomate: {
    precio: 0.8,
    variedad: "ecologico",
    stock: 15,
  },
  //Carnes
  Bacon: {
    precio: 1,
    variedad: "cerdo",
    stock: 5,
  },
  Chistorra: {
    precio: 1.3,
    variedad: "cerdo",
    stock: 4,
  },
  ChuletaCerdo: {
    precio: 3.2,
    variedad: "cerdopremium",
    stock: 7,
  },
  Chuleton: {
    precio: 5.1,
    variedad: "ternura",
    stock: 3,
  },
  PolloAsado: {
    precio: 3.9,
    variedad: "corral",
    stock: 2,
  },
  PolloEntero: {
    precio: 3,
    variedad: "corral",
    stock: 4,
  },
  //Pescados
  Gambon: {
    precio: 5.5,
    variedad: "atlantico",
    stock: 18,
  },
  Lubina: {
    precio: 2.6,
    variedad: "pacifico",
    stock: 4,
  },
  Mejillones: {
    precio: 3.2,
    variedad: "naturales",
    stock: 15,
  },
  Ostras: {
    precio: 11.2,
    variedad: "irlandesas",
    stock: 10,
  },
  Pulpo: {
    precio: 9.9,
    variedad: "pequeño",
    stock: 6,
  },
  Salmon: {
    precio: 4.4,
    variedad: "pacifico",
    stock: 5,
  },
  //Postres
  Caramelos: {
    precio: 0.7,
    variedad: "dulces",
    stock: 8,
  },
  Donut: {
    precio: 0.5,
    variedad: "glaseado",
    stock: 7,
  },
  HeladoChocolate: {
    precio: 1,
    variedad: "congelado",
    stock: 6,
  },
  HeladoSabores: {
    precio: 1.1,
    variedad: "congelado",
    stock: 6,
  },
  LemonPie: {
    precio: 0.75,
    variedad: "casero",
    stock: 4,
  },
  MagdalenaChocolate: {
    precio: 0.8,
    variedad: "casero",
    stock: 5,
  },
  //Comidas Preparadas
  AlitasDePollo: {
    precio: 3.3,
    variedad: "fritas",
    stock: 9,
  },
  Hamburguesa: {
    precio: 1.9,
    variedad: "de la casa",
    stock: 7,
  },
  PatatasFritas: {
    precio: 1.2,
    variedad: "fritas",
    stock: 10,
  },
  PerritoCaliente: {
    precio: 1.2,
    variedad: "envasado",
    stock: 6,
  },
  Pizza: {
    precio: 1.75,
    variedad: "horno",
    stock: 12,
  },
  Taco: {
    precio: 1.8,
    variedad: "casero",
    stock: 8,
  },
  //Comidas Preparadas 2
  Lasagna: {
    precio: 2.3,
    variedad: "horno",
    stock: 7,
  },
  Noodles: {
    precio: 2.9,
    variedad: "asiatico",
    stock: 5,
  },
  SandwichVegetal: {
    precio: 1.2,
    variedad: "healthy",
    stock: 9,
  },
  SopaPollo: {
    precio: 0.6,
    variedad: "sobre",
    stock: 6,
  },
  SopaVerduras: {
    precio: 0.55,
    variedad: "sobre",
    stock: 7,
  },
  Sushi: {
    precio: 8.8,
    variedad: "asiatico",
    stock: 3,
  },

  //Bebidas frias
  Cerveza: {
    precio: 0.9,
    variedad: "alemana",
    stock: 22,
  },
  Cola: {
    precio: 0.4,
    variedad: "nevera",
    stock: 30,
  },
  Cocacola: {
    precio: 0.8,
    variedad: "nevera",
    stock: 16,
  },
  Leche: {
    precio: 1,
    variedad: "envasado",
    stock: 6,
  },
  LecheCristal: {
    precio: 1.3,
    variedad: "envasado",
    stock: 11,
  },
  ZumoNaranja: {
    precio: 2.0,
    variedad: "natural",
    stock: 8,
  },

  //Bebidas calientes
  CafeLeche: {
    precio: 0.95,
    variedad: "maquina",
    stock: 9,
  },
  Cappuchino: {
    precio: 1.2,
    variedad: "maquina",
    stock: 10,
  },
  Expresso: {
    precio: 0.8,
    variedad: "maquina",
    stock: 7,
  },
  TeMatcha: {
    precio: 1.6,
    variedad: "caliente",
    stock: 13,
  },
  TeNegro: {
    precio: 1.5,
    variedad: "caliente",
    stock: 6,
  },
  TeRojo: {
    precio: 1.5,
    variedad: "caliente",
    stock: 8,
  },

};
const carrito = {
  Platano: 0,
  Uvas: 0,
  Piña: 0,
  Manzana: 0,
  Fresa: 0,
  Sandia: 0,
  Espinaca: 0,
  Lechuga: 0,
  Pepino: 0,
  PimientoRojo: 0,
  PimientoVerde: 0,
  Tomate: 0,
  Bacon: 0,
  Chistorra: 0,
  ChuletaCerdo: 0,
  Chuleton: 0,
  PolloAsado: 0,
  PolloEntero: 0,
  Gambon: 0,
  Lubina: 0,
  Mejillones: 0,
  Ostras: 0,
  Pulpo: 0,
  Salmon: 0,
  Caramelos: 0,
  Donut: 0,
  HeladoChocolate: 0,
  HeladoSabores: 0,
  MagdalenaChocolate: 0,
  LemonPie: 0,
  AlitasDePollo: 0,
  PatatasFritas: 0,
  Taco: 0,
  Hamburguesa: 0,
  PerritoCaliente: 0,
  Pizza: 0,
  Lasagna: 0,
  SopaPollo: 0,
  SopaVerduras: 0,
  Noodles: 0,
  SandwichVegetal: 0,
  Sushi: 0,
  Cerveza: 0,
  Cola: 0,
  Cocacola: 0,
  Leche: 0,
  LecheCristal: 0,
  ZumoNaranja: 0,
  CafeLeche: 0,
  Cappuchino: 0,
  Expresso: 0,
  TeMatcha: 0,
  TeRojo: 0,
  TeNegro: 0,

};

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.name);
}

function drop(ev) {
  ev.preventDefault();
  // cojo el nombre del producto
  const producto = ev.dataTransfer.getData("text");

  //cojo el elemento de la estanteria
  const productoElement = document.querySelector(".estanteria [name=" + producto + "]");


  // quito un elemento del almacen
  almacen[producto].stock--;
  console.log("quedan " + almacen[producto].stock + " " + producto + " en el elemento", productoElement);

  // si se gastaran todos, oculto el producto de la estanteria
  if (almacen[producto].stock === 0) {
    productoElement.style.display = "none";
  }
  // selecciono el elemento de la lista de la cesta
  const lista = document.querySelector('.cesta ul');
  if (carrito[producto] === 0) {
    // Si no hay de ese producto en la cesta, lo creo
    carrito[producto] = 1;
    // creo un nuevo li que englobará el producto
    const li = document.createElement('li');
    //creo un class para el li del carrito
    // En el HTML sería <li class="licarrito platano"></li>  y su selector document.querySelector(".licarrito.platano")
    li.classList.add("licarrito")
    li.classList.add(producto)

    // creo un nuevo span que tendrá el numero de ese producto en la cesta
    const span = document.createElement('span');
    // le pongo la clase con el nombre del producto para poder seleccionar el elemento cuando quiera actualizar la cantidad
    span.className = producto;
    // le meto la cantidad de ese producto que hay en la cesta
    span.textContent = carrito[producto];
    // meto el nombre del producto y el separador x en el li
    li.textContent = producto + " x ";
    // meto el span al final del li
    li.appendChild(span);
    // meto el li completo en la lista
    lista.appendChild(li);

    //Elimino el producto del carrito cuando se elimine por completo!!!!!!!!
    const cantidadElement = document.querySelector(".licarrito " + producto);
    if (carrito[producto] === 0) {
      cantidadElement.style.display = "none";
    }
    //añadimos boton para después poder borrar productos añadidos al carrito
    const button = document.createElement('button');
    button.className = "boton-eliminar";
    button.type = 'button';
    button.innerText = 'x';
    li.appendChild(button);
    button.addEventListener('click', borrarItemCarrito);

  } else {
    // sumo uno a la cantidad de producto que hay la cesta
    carrito[producto]++;
    // selecciono el span de la cesta de ese producto y le actualizo la cantidad
    document.querySelector('.cesta ul li .' + producto).textContent = carrito[producto]
  }


  //Creo funcion de borrar elemento del carrito
  function borrarItemCarrito() {
    console.log("borrando del carrito", {
      producto
    });
 
    carrito[producto]--;
    almacen[producto].stock++;
   

    // Volvemos a mostrar el producto en la estanteria cuando desaperece del carrito
    if (almacen[producto].stock > 0) {
      //cojo el elemento de la estanteria
      const productoElement = document.querySelector(".estanteria [name=" + producto + "]");
      productoElement.style.display = "block";
    }

    //Actualizo el elemento de la UI
    const contadorProductoCarrito = document.querySelector("." + producto);

    if (carrito[producto] === 0) {
      // borra todo el elemento del carrito 
      contadorProductoCarrito.remove();
    } else {
      // actualiza el numerito SIN borrar el producto y la X
      const licarritoSpan = contadorProductoCarrito.querySelector("span");
      //le meto la cantidad de ese producto que hay en la cesta
      licarritoSpan.textContent = carrito[producto];
    }
    
    actualizaTotalCarrito();
  }

  actualizaTotalCarrito();
}


//suma de precio en el total
function calcularTotalCarrito() {

  const carritoKeys = Object.keys(carrito); // ["platano", "tomate"]

  let total = 0;

  for (const producto of carritoKeys) {
    const cantidadDeProductoEnElCarrito = carrito[producto]; // 2
    const precioDelProducto = almacen[producto].precio; // 2
    const totalDelProducto = cantidadDeProductoEnElCarrito * precioDelProducto; // 4
    total = total + totalDelProducto; // 7
  }

  return total;
}

function actualizaTotalCarrito(){
  const total = calcularTotalCarrito();

  const precioTotalSpan = document.querySelector(".preciototal span");
  precioTotalSpan.textContent = total.toFixed(2) + "€";

  console.log("Vamos " + total + "eurillos");
}


 