class Product {
  constructor(userId, product) {
    this.userId = userId;
    this.id = new Date().getTime();
    this.name = product.name;
    this.image = product.image;
    this.price = product.price;
    this.description = product.description;
  }
}

export default Product;
