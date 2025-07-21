class ProductTable {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    return this.products.push(product);
  }

  getProductsByUserId(userId) {
    return this.products.filter((product) => product.userId === userId);
  }

  deleteProductById(id) {
    let filteredProducts = this.products.filter((product) => String(product.id) !== String(id));

    this.products = filteredProducts;

    return this.products;
  }
}

export default new ProductTable();
