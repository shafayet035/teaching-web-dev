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
}

export default new ProductTable();
