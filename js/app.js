const products = [
  {
    id: 0,
    name: "Alfajor Aguila Brownie",
    price: 300,
    stock: 20,
    img: "../img/aguilabrownie.jpg",
    quantity: 1,
  },
  {
    id: 1,
    name: "Alfajor Aguila Classic",
    price: 200,
    stock: 30,
    img: "../img/aguilaclasica.jpg",
    quantity: 1,
  },
  {
    id: 2,
    name: "Alfajor Bonobon",
    price: 400,
    stock: 20,
    img: "../img/bonobon.jpg",
    quantity: 1,
  },
  {
    id: 3,
    name: "Alfajor Block",
    price: 500,
    stock: 50,
    img: "../img/coflerblock.jpg",
    quantity: 1,
  },
  {
    id: 4,
    img: "../img/guaymallenchocolate.jpg",
    name: "Alfajor Guaymallen",
    price: 100,
    stock: 20,
    quantity: 1,
  },
  {
    id: 5,
    img: "../img/milkamouse.jpg",
    name: "Alfajor Milka Mouse",
    price: 350,
    stock: 50,
    quantity: 1,
  },
  {
    id: 6,
    img: "../img/milkaoreo.jpg",
    name: "Alfajor Milka Oreo",
    price: 420,
    stock: 30,
    quantity: 1,
  },
  {
    id: 7,
    img: "../img/pepitos.jpg",
    name: "Alfajor Petitos",
    price: 280,
    stock: 20,
    quantity: 1,
  },
  {
    id: 8,
    img: "../img/terrabusidulcedeleche.jpg",
    name: "Alfajor Terrabusi",
    price: 320,
    stock: 20,
    quantity: 1,
  },
];

let cart = [];

const DibujarProductos = () => {
  const container_products = document.getElementById("container-products");
  products.forEach((product) => {
    const div = document.createElement("div");
    div.className = "items";
    div.innerHTML = `
    <div class="card">
    <div class="card-body">
    <h2>${product.name}</h2>
    <img src=${product.img}> </img>
    <h4>$${product.price}</h4>
    <p>Stock: ${product.stock}</p>
    <button class="button_prodduct" id="agregar${product.id}"><i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
    </div>
    </div>
        `;
    container_products.append(div);
    const boton = document.getElementById(`agregar${product.id}`);
    boton.addEventListener("click", () => AddToCart(product.id));
  });
};

const AddToCart = (id) => {
  const item = products.find((product) => product.id === id);
  cart.push(item);
  console.log(cart);
  updateCart();
};

const set = document.getElementById("clearcart");
set.addEventListener("click", () => {
  cart.length = 0;
  updateCart();
});

const setCart = (id) => {
  const item = cart.find((prod) => prod.id === id);
  const indice = cart.indexOf(item);
  cart.splice(indice, 1);
  console.log(cart);
  updateCart();
};

const updateCart = () => {
  const divcart = document.getElementById("detailproduct");
  divcart.innerHTML = ` `;
  cart.forEach((prod) => {
    const div = document.createElement("div");
    div.className = `det`;
    div.innerHTML = `
      <h4>${prod.name}</h4>
      <h4>$${prod.price}</h4>
      <h4>U: ${prod.quantity}</h4>
      <h3 onclick="setCart(${prod.id})"<i class="fa-solid fa-trash"></i></h3>
      `;
    divcart.appendChild(div);
  });

  const count = document.getElementById("counter");
  count.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> ${cart.length}`;
  const total = document.querySelector(".total");
  total.innerHTML = `<h3>Total: $${cart.reduce(
    (acc, prod) => acc + prod.price,
    0
  )}</h3>`;
};

DibujarProductos();
