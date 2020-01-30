const products = [];
module.exports = class Product {
    constructor(title) {
        // this =Product
        this.title = title;
    }
    // function save
    save() {
        products.push(this);
    }
    // retrieve fetchall
    static fetchAll() {

        return products;
    }

};
