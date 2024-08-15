// Example product data
const products = [
    {
        name: 'Product 1',
        description: 'Description for Product 1.',
        price: '$29.99',
        image: 'https://via.placeholder.com/150'
    },
    {
        name: 'Product 2',
        description: 'Description for Product 2.',
        price: '$19.99',
        image: 'https://via.placeholder.com/150'
    },
    {
        name: 'Product 3',
        description: 'Description for Product 3.',
        price: '$39.99',
        image: 'https://via.placeholder.com/150'
    }
];

// Function to render products
function renderProducts() {
    const productList = document.querySelector('.product-list');
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
}

// Call the function to render products
renderProducts();

