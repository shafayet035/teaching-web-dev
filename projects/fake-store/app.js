const API_URL = 'https://fakestoreapi.com';

const modal = document.querySelector('#modal');

const getProducts = async () => {
  try {
    const result = await fetch(`${API_URL}/products`);
    const data = await result.json();

    renderProducts(data);
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async (id) => {
  try {
    const result = await fetch(`${API_URL}/products/${id}`);
    const data = await result.json();

    const productHtml = createModalProduct(data);

    modal.innerHTML = productHtml;

    toggleModal(true);
  } catch (error) {
    console.log(error);
  }
};

const createModalProduct = (product) => {
  const html = `
            <div class="product-card">
                <img src="${product.image}" />
                <div class="product-info">
                    <h3> ${product.title} </h3>
                    <h5> $${product.price} </h5>
                    <span> ${product.category} </span>
                    <p> ${product.description} </p>
                    <button onclick={toggleModal(false)}>Close </button>
                </div>
            </div>
        `;

  return html;
};

const createProduct = (product) => {
  const html = `
          <div class="product-card">
              <img src="${product.image}" />
              <div class="product-info">
                  <h3> ${product.title} </h3>
                  <h5> $${product.price} </h5>
                  <span> ${product.category} </span>
                  <button onclick={getProduct(${product.id})}>Read more</button>
              </div>
          </div>
      `;

  return html;
};

const renderProducts = (products) => {
  const productsDiv = document.querySelector('#products');

  products.forEach((product) => {
    const productHtml = createProduct(product);
    productsDiv.innerHTML += productHtml;
  });
};

const toggleModal = (value) => {
  if (value) {
    modal.classList.add('active');
  } else {
    modal.classList.remove('active');
  }
};

getProducts();
