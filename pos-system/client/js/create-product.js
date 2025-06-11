import { API_URL } from './constants.js';

class CreateProduct {
  constructor() {
    this.createProductForm = document.getElementById('create-product-form');

    this.createProductForm.addEventListener('submit', this.createProduct.bind(this));
  }

  async createProduct(e) {
    e.preventDefault();

    const formData = new FormData(this.createProductForm);

    const name = formData.get('product-name');
    const image = formData.get('product-image');
    const price = formData.get('product-price');
    const description = formData.get('product-description');

    const response = await fetch(`${API_URL}/product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-user-id': localStorage.getItem('loggedInUser'),
      },
      body: JSON.stringify({ name, image, price, description }),
    });

    const data = await response.json();

    if (response.status === 201) {
      window.location.href = 'products.html';
    } else {
      console.log(data);
    }
  }
}

export default new CreateProduct();
