const cartCountElem = document.getElementById('cart-count');
let cartCount = 0;

const products = [
  // Electronics
  {
    title: "Galaxy S22",
    desc: "Smartphone with AMOLED display.",
    price: "$699",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcSfKLaK8yU1bfxGavNhOKXUir3Asm9INZKA&s"
  },
  {
    title: "Sony WH-1000XM4",
    desc: "Noise-cancelling headphones.",
    price: "$299",
    image: "https://m.media-amazon.com/images/I/71S8U9VzLTL._AC_UL640_FMwebp_QL65_.jpg"
  },
  {
    title: "Dell XPS 13",
    desc: "Ultrabook with Intel i7.",
    price: "$999",
    image: "https://m.media-amazon.com/images/I/71k45hZkLmL._AC_UF894,1000_QL80_.jpg"
  },

  // Home Essentials
  {
    title: "iRobot Roomba",
    desc: "Smart vacuum cleaner.",
    price: "$249",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyDfMdHjmtNO28Yg74sdmPQBJ3dk_8y9X4nA&s"
  },
  {
    title: "Breville Toaster",
    desc: "Smart 2-slice toaster.",
    price: "$89",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_07ZbvQwLCqQQxE3qS241lOxz7D9MW4wg4Q&s"
  },
  {
    title: "Philips Air Fryer",
    desc: "Oil-less crisp cooking.",
    price: "$139",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJACwF-PKZUBnaw2j3lfVB3RJPDpPtOqqD2Q&s"
  },

  // Books
  {
    title: "Atomic Habits",
    desc: "Guide to building habits.",
    price: "$16.99",
    image: "https://m.media-amazon.com/images/I/81eB+7+CkUL.jpg"
  },
  {
    title: "Psychology of Money",
    desc: "Lessons on wealth and behavior.",
    price: "$18.50",
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg"
  },
  {
    title: "The Alchemist",
    desc: "Follow your dreams.",
    price: "$14.99",
    image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg"
  },
];

// Create cards for each section
const row1 = document.getElementById('row1');
const row2 = document.getElementById('row2');
const row3 = document.getElementById('row3');

products.slice(0, 3).forEach(p => row1.append(createCard(p)));
products.slice(3, 6).forEach(p => row2.append(createCard(p)));
products.slice(6).forEach(p => row3.append(createCard(p)));

function createCard({ title, desc, price, image }) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${image}" alt="${title}" />
    <h3>${title}</h3>
    <p>${desc}</p>
    <div class="price">${price}</div>
    <button class="add-btn">Add to Cart</button>
  `;
  card.querySelector('.add-btn').addEventListener('click', () => {
    cartCount++;
    cartCountElem.textContent = cartCount;
  });
  return card;
}
