import { API_URL } from './constants.js';

class Products {
  constructor() {
    this.productsContainer = document.getElementById('products-container');

    this.getProducts();
  }

  async getProducts() {
    const response = await fetch(`${API_URL}/products`, {
      headers: {
        'Content-Type': 'application/json',
        'x-user-id': localStorage.getItem('loggedInUser'),
      },
    });

    const data = await response.json();

    this.renderProducts(data);
  }

  getProductTemplate(product) {
    return `
      <div id="product">
        <img class="w-full h-[200px] object-cover"  src="${product.image}" alt="" />
        <h3 class="text-lg font-bold">${product.name}</h3>
        <p class="text-gray-500">${product.description}</p>
        <p class="text-gray-500">${product.price}</p>
        <button id="remove-btn" data-id="${product.id}" class="bg-red-800 text-xs text-white p-2 rounded-md hover:bg-red-600 cursor-pointer">Remove</button>
      </div>
    `;
  }

  renderProducts(products) {
    this.productsContainer.innerHTML = '';

    products.forEach((product) => {
      const productTemplate = this.getProductTemplate(product);

      this.productsContainer.innerHTML += productTemplate;
    });

    let removeBtns = document.querySelectorAll('#remove-btn');

    removeBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.removeProduct(btn.dataset.id);
      });
    });
  }

  async removeProduct(id) {
    const response = await fetch(`${API_URL}/product/${id}`, {
      method: 'DELETE',
    });

    await response.json();

    if (response.ok) {
      await this.getProducts();
    }
  }
}

export default new Products();
